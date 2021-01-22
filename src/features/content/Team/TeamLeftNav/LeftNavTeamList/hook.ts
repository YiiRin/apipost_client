import Message from 'components/Message'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { teamApis } from 'service/http/api'
import { Team } from 'service/http/api/team'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'
import { TeamsType } from '.'
import PubSub from 'pubsub-js'
import { updateUserInfo } from 'features/header/UserInfo/action'
import { ADD_TEAM, RELOAD_TEAMS, UPDATE_TEAM_NAME } from '../../pubsub-token'
/**
 * 加载团队
 * @param type
 */
export const useLoadTeams = (type: TeamsType) => {
  const [managedTeams, setManagedTeams] = useState<Team[]>([])
  const [joinedTeams, setJoinedTeams] = useState<Team[]>([])
  /**
   * 加载团队
   *
   * @param type 团队类型
   */
  const loadTeams = useCallback(async (type: TeamsType) => {
    const api =
      type === 'managed'
        ? teamApis.loadTeamsManagedByUser
        : teamApis.loadTeamsJoinedByUser
    const result = await api()

    if (result.data) {
      if (type === 'managed') {
        setManagedTeams(result.data)
        setJoinedTeams([])
      } else if (type === 'joined') {
        setJoinedTeams(result.data)
        setManagedTeams([])
      }
    }
  }, [])
  useEffect(() => {
    loadTeams(type)
  }, [type, loadTeams])

  useEffect(() => {
    const reloadTeamsToken = PubSub.subscribe(RELOAD_TEAMS, () => {
      loadTeams(type)
    })

    const addTeamToken = PubSub.subscribe(ADD_TEAM, (_: string, data: Team) => {
      if (type === 'managed') {
        setManagedTeams((prev) => [...prev, data])
      } else if (type === 'joined') {
        setJoinedTeams((prev) => [...prev, data])
      }
    })

    const updateTeamToken = PubSub.subscribe(
      UPDATE_TEAM_NAME,
      (_: string, data: Team) => {
        if (type === 'managed') {
          setManagedTeams((prev) =>
            prev.map((tempTeam) => {
              if (tempTeam.id === data.id) {
                return data
              }
              return tempTeam
            })
          )
        } else if (type === 'joined') {
          setJoinedTeams((prev) =>
            prev.map((tempTeam) => {
              if (tempTeam.id === data.id) {
                return data
              }
              return tempTeam
            })
          )
        }
      }
    )

    return () => {
      PubSub.unsubscribe(reloadTeamsToken)
      PubSub.unsubscribe(addTeamToken)
      PubSub.unsubscribe(updateTeamToken)
    }
  }, [type, loadTeams])

  return type === 'managed' ? managedTeams : joinedTeams
}

/**
 * 自动跳转到详情页面
 *
 * @param type
 * @param teams
 */
export const useAutoJumpToTeamInfo = (type: TeamsType, teams: Team[]) => {
  const history = useHistory()
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === `/team/${type}`) {
      if (teams[0]) {
        history.replace(`/team/${type}/${teams[0].id}`, teams[0].id)
      }
    }
  }, [teams, history, type, pathname])
}

export const useAddTeamModal = () => {
  const { open, close, duration, visible, inProp } = useBaseModal(false, 400)
  const teamNameRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleAddTeam = async () => {
    const teamName = teamNameRef.current?.value

    if (!teamName || !teamName.trim()) {
      Message.pop({
        type: 'warning',
        message: '请输入团队名称，建议输入公司名/项目组名称等',
        closable: true,
      })
      return
    }

    const result = await teamApis.addTeam(teamName)
    if (isReportError(result)) return

    // 添加成功
    if (!isResponseError(result)) {
      if (result.data) {
        dispatch(updateUserInfo(result.data.user))
        PubSub.publish(ADD_TEAM, result.data.team)
      }
    }
    close()
  }

  return {
    open,
    close,
    duration,
    visible,
    inProp,
    teamNameRef,
    handleAddTeam,
  }
}
