import { combineReducers } from 'redux'
import { User } from 'service/http/api/auth'
import { createReducer } from 'typesafe-actions'
import { loadUserInfo, removeUserInfo } from './action'

const userInfo = createReducer({} as User)
  .handleAction([loadUserInfo.success], (_, action) => action.payload)
  .handleAction([removeUserInfo], (_, __) => ({} as User))

const user = combineReducers({
  userInfo,
})

export default user
