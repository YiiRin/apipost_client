import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { toggleTheme } from './action'
import themeObj, { Theme } from './index'

/**
 * themeMode
 */
const themeMode = createReducer(themeObj.light as Theme).handleAction(
  [toggleTheme],
  (_, action) => themeObj[action.payload]
)

const themeReducer = combineReducers({
  themeMode,
})

export default themeReducer
