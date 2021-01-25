import { ApiPostStore } from 'store/types'

export const userInfoSelector = (state: ApiPostStore.RootState) =>
  state.user.userInfo

export const currentTeamSelector = (state: ApiPostStore.RootState) =>
  state.user.currentTeam

export const currentTeamUsersSelector = (state: ApiPostStore.RootState) =>
  state.user.currentTeamUsers
