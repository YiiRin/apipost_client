import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDataBind } from 'service/hook/common/useDataBind'
import { User } from 'service/http/api/auth'
import { TeamMember } from 'service/http/api/team'
import {
  currentTeamSelector,
  currentTeamUsersSelector,
  userInfoSelector,
} from 'store/user/selector'

export interface Partner {
  /** 团队成员 id */
  teamMemberId: string
  /** 成员名 */
  name: string

  /** 成员邮箱 */
  email: string

  /** 成员的用户 id */
  userId: string
}

const useMemberIds = (...ids: string[]) => {
  const [memberIds, setMemberIds] = useState<string[]>([...ids])
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const checked = event.target.checked
      if (checked && !memberIds.includes(event.target.value)) {
        setMemberIds((prev) => [...prev, event.target.value])
      } else if (!checked && memberIds.includes(event.target.value)) {
        setMemberIds((prev) =>
          prev.filter((memberId) => memberId !== event.target.value)
        )
      }
    },
    [memberIds]
  )

  return {
    memberIds,
    setMemberIds,
    onChange,
  }
}

/**
 * 模态框表单
 *
 * @param ids
 */
export const useAddProjectForm = (name = '', ...ids: string[]) => {
  const userInfo = useSelector(userInfoSelector)
  const projectName = useDataBind(name)
  const memberIds = useMemberIds(userInfo.id, ...ids)

  return {
    projectName,
    memberIds,
  }
}

const mapTeamMembersToPartners = (teamMembers: TeamMember[], users: User[]) => {
  const partners: Partner[] = []

  teamMembers.forEach((member) => {
    const partner = {} as Partner
    partner.teamMemberId = member.id
    partner.userId = member.userId
    const user = users.find((u) => u.id === member.userId)
    if (user) {
      partner.name = user.name
      partner.email = user.email
    }
    partners.push(partner)
  })

  return partners
}

/**
 * 加载成员列表
 */
export const useMembersList = () => {
  const currentTeam = useSelector(currentTeamSelector)
  const currentTeamUsers = useSelector(currentTeamUsersSelector)

  const partners = mapTeamMembersToPartners(
    (currentTeam && currentTeam.members) || [],
    currentTeamUsers
  )

  return partners
}
