import * as themeActions from 'store/theme/action'
import * as authActions from 'store/auth/action'
import * as userActions from 'store/user/action'

const rootActions = {
  theme: themeActions,
  auth: authActions,
  user: userActions,
}

export default rootActions
