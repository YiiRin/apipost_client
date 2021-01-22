import { post } from '../config'
import { Team, TeamMemberRole } from './team'
import { ResponseError, ResponseSuccess } from './type'

const apiUrls = {
  toggleTeamMemberRole: '/team-member/toggle-role',
  exitTeam: '/team-member/exit',
  addTeamMember: '/team-member/add',
}

/**
 * 切换用户成员角色
 *
 * @param teamId 团队 id
 * @param userId 用户 id
 * @param role 用户角色
 */
export const toggleTeamMemberRole = async (
  teamId: string,
  userId: string,
  role: TeamMemberRole
) =>
  post(apiUrls.toggleTeamMemberRole, { teamId, userId, role }) as Promise<
    ResponseSuccess<Team> | ResponseError
  >

/**
 * 添加角色
 *
 * @param teamId 团队 id
 * @param email 邮箱
 */
export const addTeamMember = async (teamId: string, email: string) =>
  post(apiUrls.addTeamMember, { teamId, email }) as Promise<
    ResponseSuccess<Team> | ResponseError
  >

/**
 * 退出团队
 *
 * @param teamId 团队 id
 * @param userId 用户 id
 */
export const exitTeam = async (teamId: string, userId: string) =>
  post(apiUrls.exitTeam, { userId, teamId }) as Promise<
    ResponseSuccess | ResponseError
  >
