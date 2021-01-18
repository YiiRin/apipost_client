import * as themeActions from 'assets/theme/action'
import * as authActions from 'features/auth/action'
import * as userActions from 'features/header/UserInfo/action'

const rootActions = {
  theme: themeActions,
  auth: authActions,
  user: userActions,
}

export default rootActions
