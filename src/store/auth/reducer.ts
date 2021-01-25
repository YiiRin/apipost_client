import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { toggleAuthStatus } from './action'

/**
 * 登录状态
 */
const isLogin = createReducer(false as boolean).handleAction(
  [toggleAuthStatus],
  (_, action) => action.payload
)


const auth = combineReducers({
  isLogin
})

export default auth