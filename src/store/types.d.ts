import { ActionType, StateType } from 'typesafe-actions'

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>
  }
}

declare namespace ApiPostStore {
  export type Store = StateType<typeof import('.').default>
  export type RootState = StateType<typeof import('./root-reducer').default>
  export type RootAction = ActionType<typeof import('./root-action').default>
  export type RootThunk = typeof import('./root-thunk').default
}
