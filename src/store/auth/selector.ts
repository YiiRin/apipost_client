import { ApiPostStore } from 'store/types'

export const isLoginSelector = (state: ApiPostStore.RootState) =>
  state.auth.isLogin
