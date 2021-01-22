import { combineReducers } from 'redux'
import { User } from 'service/http/api/auth'
import { Team } from 'service/http/api/team'
import { createReducer } from 'typesafe-actions'
import {
  loadCurrentTeam,
  loadUserInfo,
  removeUserInfo,
  toggleCurrentTeam,
  updateUserInfo,
} from './action'

const userInfo = createReducer({} as User)
  .handleAction(
    [loadUserInfo.success, updateUserInfo],
    (_, action) => action.payload
  )
  .handleAction([removeUserInfo], (_, __) => ({} as User))

const currentTeam = createReducer({} as Team)
  .handleAction([loadCurrentTeam.success], (_, action) => action.payload)
  .handleAction([toggleCurrentTeam], (_, action) => action.payload)

const user = combineReducers({
  userInfo,
  currentTeam,
})

export default user
