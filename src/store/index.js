import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/passwordReducer'

const middlewares = applyMiddleware(logger, thunk)
const store = createStore(rootReducer, middlewares)

export default store