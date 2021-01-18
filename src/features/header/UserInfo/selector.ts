import { ApiPostStore } from 'store/types'

export const userInfoSelector = (state: ApiPostStore.RootState) =>
  state.user.userInfo

export const isLoginSelector = (state: ApiPostStore.RootState) =>
  state.auth.isLogin
