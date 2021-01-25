import {
  currentTeamSelector,
  currentTeamUsersSelector,
} from 'store/user/selector'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDataBind } from 'service/hook/common/useDataBind'
import { User } from 'service/http/api/auth'
import { TeamMember } from 'service/http/api/team'

interface Partner {
  /** 团队成员 id */
  teamMemberId: string
  /** 成员名 */
  name: string

  /** 成员邮箱 */
  email: string

  /** 成员的用户 id */
  userId: string
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

const useMemberIds = () => {
  const [memberIds, setMemberIds] = useState<string[]>([])
  const onChange = () => {}
}

export const useAddProjectForm = () => {
  const projectName = useDataBind('')
}

export const useMembersList = () => {
  const currentTeam = useSelector(currentTeamSelector)
  const currentTeamUsers = useSelector(currentTeamUsersSelector)

  const partners = mapTeamMembersToPartners(
    (currentTeam && currentTeam.members) || [],
    currentTeamUsers
  )

  return partners
}
