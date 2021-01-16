import { combineReducers } from 'redux'
import theme from 'assets/theme/reducer'
import auth from 'features/auth/reducer'

const rootReducer = combineReducers({
  theme,
  auth,
})

export default rootReducer
