import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import * as middleware from '../middleware'
import thunk from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(
      middleware.forbiddenWordsMiddleware, thunk))
)

export default store;
