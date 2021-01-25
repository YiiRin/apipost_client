import { combineReducers } from 'redux'
import theme from 'store/theme/reducer'
import auth from 'store/auth/reducer'
import user from 'store/user/reducer'
const rootReducer = combineReducers({
  theme,
  auth,
  user,
})

export default rootReducer
