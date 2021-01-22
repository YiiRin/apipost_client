import { get, post } from '../config'
import { User } from './auth'
import { Project } from './project'
import { ResponseError, ResponseSuccess } from './type'

const apiUrls = {
  loadTeamsManagedByUser: '/team/managed',
  loadTeamsJoinedByUser: '/team/joined',
  addTeam: '/team',
  getCurrentTeam: (teamId: string) => `/team/${teamId}`,
  toggleCurrentTeam: '/team/toggleCurrentTeam',
  updateTeamName: '/team/update',
}

export enum TeamVersion {
  FREE = 'free',
}

export interface Team {
  id: string
  name: string
  teamVersion: TeamVersion
  expireTime: string
  createTime: string
  officialCubicleNum: number
  members: TeamMember[]
  projects: Project[]
}

export enum TeamMemberRole {
  ADMINISTRATOR = 'administrator',
  MEMBER = 'member',
}

export interface TeamMember {
  id: string
  userId: string
  bindDateTime: string
  role: TeamMemberRole
}

/**
 * 加载用户管理的团队
 */
export const loadTeamsManagedByUser = async () =>
  get(apiUrls.loadTeamsManagedByUser) as Promise<ResponseSuccess<Team[]>>

/**
 * 加载用户加入的团队
 */
export const loadTeamsJoinedByUser = async () =>
  get(apiUrls.loadTeamsJoinedByUser) as Promise<ResponseSuccess<Team[]>>

export interface AddTeamResult {
  team: Team
  user: User
}

/**
 * 添加团队
 *
 * @param teamName 团队名
 */
export const addTeam = async (teamName: string) =>
  post(apiUrls.addTeam, { teamName }) as Promise<
    ResponseSuccess<AddTeamResult> | ResponseError
  >

interface FindTeamResult {
  team: Team
  members: User[]
}
/**
 * 获取用户的当前团队
 *
 * @param teamId 团队id
 */
export const getTeamById = async (teamId: string) =>
  get(apiUrls.getCurrentTeam(teamId)) as Promise<
    ResponseSuccess<FindTeamResult>
  >

/**
 * 切换用户的当前团队
 *
 * @param teamId 团队 id
 */
export const toggleCurrentTeam = async (teamId: string) =>
  post(apiUrls.toggleCurrentTeam, { teamId }) as Promise<ResponseSuccess<User>>

/**
 * 更新团队名
 * 
 * @param teamId 
 * @param teamName 
 */
export const updateTeamName = async (teamId: string, teamName: string) =>
  post(apiUrls.updateTeamName, { teamId, teamName }) as Promise<
    ResponseSuccess<Team>
  >
