import { combineReducers } from 'redux'
import theme from 'assets/theme/reducer'
import auth from 'features/auth/reducer'
import user from 'features/header/UserInfo/reducer'
const rootReducer = combineReducers({
  theme,
  auth,
  user,
})

export default rootReducer
