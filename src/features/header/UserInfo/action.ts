import { User } from 'service/http/api/auth'
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
