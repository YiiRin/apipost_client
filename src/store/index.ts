import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeEnhancers } from './utils'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './root-reducer'

/**
 * configure middware
 */
function configureMiddwares() {
  const logger = createLogger()
  return process.env.NODE_ENV === 'development' ? [logger, thunk] : [thunk]
}

// 1. configure redux middwares
const middwares = configureMiddwares()
// 2. intergrated with redux-devtools
const enhancer = composeEnhancers(applyMiddleware(...middwares))
// 3. rehydrate state on app start
const initialState = {}

// 4. create store
const store = createStore(rootReducer, initialState, enhancer)

export default store
