import { get, post } from '../config'
import { User } from './auth'
import { Team } from './team'
import { ResponseError, ResponseSuccess } from './type'

export enum ProjectStatus {
  LOCKED = 'locked',
  UNLOCKED = 'unlocked',
}
export interface Project {
  apiId: string
  managerId: string
  name: string
  partners: string[]
  status: ProjectStatus
  team?: Team
  id: string
  createTime: string
}

const apiUrls = {
  addProject: '/project/add',
  updateProject: '/project/update',
  deleteProject: '/project/delete',
  exitProject: '/project/exit',
  cloneProject: '/project/clone',
  toggleProjectStatus: '/project/toggle-status',
  changeProjectManager: '/project/change-manager',
  getManagedProjects: (teamId: string) => `/project/managed/${teamId}`,
  getJoinedProjects: (teamId: string) => `/project/joined/${teamId}`,
  changeEditedProject: (projectId: string) => `/project/edit/${projectId}`,
}

/**
 * 添加项目
 *
 * @param teamId
 * @param name
 * @param partners
 */
export const addProject = async (
  teamId: string,
  name: string,
  partners: string[]
) =>
  post(apiUrls.addProject, { teamId, name, partners }) as Promise<
    ResponseSuccess<Project> | ResponseError
  >

export const updateProject = async (
  projectId: string,
  name: string,
  partners: string[]
) =>
  post(apiUrls.updateProject, { projectId, name, partners }) as Promise<
    ResponseSuccess<Project> | ResponseError
  >

/**
 * 删除项目
 *
 * @param projectId
 */
export const deleteProject = async (projectId: string) =>
  post(apiUrls.deleteProject, { projectId }) as Promise<
    ResponseSuccess | ResponseError
  >

/**
 * 退出项目
 * @param projectId
 */
export const exitProject = async (projectId: string) =>
  post(apiUrls.exitProject, { projectId }) as Promise<
    ResponseSuccess | ResponseError
  >

/**
 * 克隆项目
 *
 * @param projectId
 */
export const cloneProject = async (projectId: string) =>
  post(apiUrls.cloneProject, { projectId }) as Promise<
    ResponseSuccess<Project> | ResponseError
  >

/**
 * 切换项目状态
 *
 * @param projectId
 * @param status
 */
export const toggleProjectStatus = async (
  projectId: string,
  status: ProjectStatus
) =>
  post(apiUrls.toggleProjectStatus, { projectId, status }) as Promise<
    ResponseSuccess<Project> | ResponseError
  >

/**
 * 改变项目的管理员
 *
 * @param projectId
 * @param newManagerId
 */
export const changeProjectManager = async (
  projectId: string,
  newManagerId: string
) =>
  post(apiUrls.changeProjectManager, { projectId, newManagerId }) as Promise<
    ResponseSuccess<Project> | ResponseError
  >
/**
 * 获取管理的项目
 *
 * @param teamId
 */
export const getManagedProjects = async (teamId: string) =>
  get(apiUrls.getManagedProjects(teamId)) as Promise<
    ResponseSuccess<Project[]> | ResponseError
  >

/**
 * 获取参与的项目
 *
 * @param teamId
 */
export const getJoinedProjects = async (teamId: string) =>
  get(apiUrls.getJoinedProjects(teamId)) as Promise<
    ResponseSuccess<Project[]> | ResponseError
  >

/**
 * 切换正在编辑的项目
 * @param projectId
 */
export const changeEditedProject = async (projectId: string) =>
  post(apiUrls.changeEditedProject(projectId)) as Promise<
    ResponseSuccess<User> | ResponseError
  >
