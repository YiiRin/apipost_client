import { createAction } from 'typesafe-actions'

/**
 * 切换登录状态
 */
export const toggleAuthStatus = createAction('TOGGLE_AUTH_STATUS')<boolean>()
