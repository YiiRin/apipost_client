import { User } from 'service/http/api/auth'
import { Team } from 'service/http/api/team'
import { createAction, createAsyncAction } from 'typesafe-actions'

/**
 * 加载用户信息
 */
export const loadUserInfo = createAsyncAction(
  'LOAD_USER_INFO_REQUEST',
  'LOAD_USER_INFO_SUCCESS',
  'LOAD_USER_INFO_FAILED'
)<undefined, User, undefined>()

/**
 * 删除用户信息
 */
export const removeUserInfo = createAction('REMOVE_USER_INFO')<undefined>()

/**
 * 更新用户信息
 */
export const updateUserInfo = createAction('UPDATE_USER_INFO')<User>()

/**
 * 加载当前团队
 */
export const loadCurrentTeam = createAsyncAction(
  'LOAD_CURRENT_TEAM_REQUEST',
  'LOAD_CURRENT_TEAM_SUCCESS',
  'LOAD_CURRENT_TEAM_FAILED',
)<undefined, Team, undefined>()

/**
 * 切换当前团队
 */
export const toggleCurrentTeam = createAction('TOGGLE_CURRENT_TEAM')<Team>()