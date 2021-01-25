import { ApiPostStore } from 'store/types'

export const themeModeSelector = (state: ApiPostStore.RootState) =>
  state.theme.themeMode
