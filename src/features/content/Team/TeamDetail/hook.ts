import Message from 'components/Message'
import { userInfoSelector } from 'features/header/UserInfo/selector'
import { Dispatch, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useRouteMatch } from 'react-router-dom'
import { useBaseConfirm } from 'service/hook/common/useBaseConfirm'
import { teamApis, teamMemberApis } from 'service/http/api'
import { User } from 'service/http/api/auth'
import { Team, TeamMember, TeamMemberRole } from 'service/http/api/team'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'
import { TeamsType } from '../TeamLeftNav/LeftNavTeamList'
import { toggleCurrentTeamThunk } from './thunk'
import PubSub from 'pubsub-js'
import { RELOAD_TEAMS } from '../pubsub-token'

export interface TeamMemberVo {
  /**
   * 团队 id
   */
  teamId: string
  /**
   * 用户 id
   */
  userId: string
  /**
   * 用户昵称
   */
  username: string
  /**
   * 用户邮箱
   */
  email: string

  /**
   * 用户绑定时间
   */
  bindTime: string | Date
  /**
   * 用户角色
   */
  role: TeamMemberRole
}

/**
 * 将团队成员信息映射成对应的 vo
 *
 * @param teamMembers 团队成员列表
 * @param users 团队成员对应的用户列表
 * @param teamId 团队 id
 */
const mapTeamMemberToTeamMemberVo = (
  teamMembers: TeamMember[],
  users: User[],
  teamId: string
) => {
  const teamMemberVos = [] as TeamMemberVo[]
  teamMembers.forEach((teamMember) => {
    const teamMemberVo = {} as TeamMemberVo
    teamMemberVo.bindTime = teamMember.bindDateTime
    teamMemberVo.teamId = teamId
    teamMemberVo.userId = teamMember.userId
    teamMemberVo.role = teamMember.role
    const user = users.find((user) => user.id === teamMember.userId)
    if (user) {
      teamMemberVo.username = user.name
      teamMemberVo.email = user.email
    }
    teamMemberVos.push(teamMemberVo)
  })

  return teamMemberVos
}

/**
 * 加载 team 信息 hook
 */
const useLoadTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberVo[]>([])
  const [team, setTeam] = useState<Team | null>(null)

  const loadTeamMembers = useCallback(async (teamId: string) => {
    if (!teamId) {
      setTeam(null)
      setTeamMembers([])
      return
    }
    const result = await teamApis.getTeamById(teamId)
    if (result.data) {
      setTeam(result.data.team)
      const users = result.data.members
      const teamMembers = result.data.team.members

      const teamMemberVos = mapTeamMemberToTeamMemberVo(
        teamMembers,
        users,
        teamId
      )
      setTeamMembers(teamMemberVos)
    }
  }, [])

  useEffect(() => {
    const token = PubSub.subscribe(RELOAD_TEAMS, () => {
      setTeam(null)
      setTeamMembers([])
    })

    return () => PubSub.unsubscribe(token)
  }, [])

  return {
    teamMembers,
    team,
    setTeamMembers,
    setTeam,
    loadTeamMembers,
  }
}

/**
 * 加载团队成员
 */
export const useAutoLoadTeamMembers = () => {
  const {
    params: { type },
  } = useRouteMatch<{ type: TeamsType }>()
  const { state: teamId } = useLocation<string | undefined>()

  const {
    loadTeamMembers,
    team,
    setTeam,
    setTeamMembers,
    teamMembers,
  } = useLoadTeamMembers()
  useEffect(() => {
    loadTeamMembers(teamId ?? '')
  }, [teamId, loadTeamMembers])

  return {
    teamMembers,
    type,
    team,
    setTeam,
    setTeamMembers,
    loadTeamMembers,
  }
}

/**
 * 切换当前团队
 *
 * @param team
 */
export const useToggleCurrentTeam = (team: Team | null) => {
  const { visible, inProp, duration, close, open } = useBaseConfirm(false, 400)
  const dispatch = useDispatch()
  const handleToggleCurrentTeam = async () => {
    team && dispatch(toggleCurrentTeamThunk(team))
    close()
  }

  return {
    visible,
    inProp,
    open,
    duration,
    handleToggleCurrentTeam,
    close,
  }
}

/**
 * 管理工位
 */
export const useOfficialCubicleManage = (
  type: TeamsType,
  teamId: string,
  setTeamMembers: Dispatch<React.SetStateAction<TeamMemberVo[]>>,
  loadTeamMembers: (teamId: string) => Promise<void>
) => {
  const userInfo = useSelector(userInfoSelector)
  /**
   * 切换角色
   *
   * @param iRole 原来的角色
   */
  const toggleTeamMemberRole = (iRole: TeamMemberRole) => {
    return (userId: string) => async () => {
      const role =
        iRole === TeamMemberRole.ADMINISTRATOR
          ? TeamMemberRole.MEMBER
          : TeamMemberRole.ADMINISTRATOR
      const result = await teamMemberApis.toggleTeamMemberRole(
        teamId,
        userId,
        role
      )
      if (isReportError(result)) return false
      if (!isResponseError(result)) {
        await loadTeamMembers(teamId)
        if (role === TeamMemberRole.ADMINISTRATOR) {
          Message.pop({
            type: 'success',
            message: '设置管理员成功',
            closable: true,
          })
        }
      }

      return true
    }
  }

  /**
   * 退出团队
   *
   * @param userId 用户 id
   * @param teamId 团队 id
   */
  const exitTeam = async (userId: string, teamId: string) => {
    const result = await teamMemberApis.exitTeam(teamId, userId)
    if (isReportError(result)) return false

    // 2. 如果退出团队的不是当前用户，则重新加载 team
    if (userId !== userInfo.id) {
      await loadTeamMembers(teamId)
    }

    return true
  }

  /**
   * 添加团队成员
   *
   * @param teamId
   * @param email
   */
  const addTeamMember = async (teamId: string, email: string) => {
    const result = await teamMemberApis.addTeamMember(teamId, email)
    if (isReportError(result)) return false
    if (!isResponseError(result)) {
      loadTeamMembers(teamId)
    }
    return true
  }

  return {
    toggleTeamMemberRole,
    exitTeam,
    addTeamMember,
  }
}
