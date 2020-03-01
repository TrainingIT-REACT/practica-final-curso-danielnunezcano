import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import playerActions from './reducers/playerActions'
import user from './reducers/user'
import dataAlbums from './reducers/dataAlbums'
import dataSong from './reducers/dataSongs'
import middleware from './middlewares/middleware'

const store = createStore(
  combineReducers({ playerActions, user, dataAlbums, dataSong }),
  composeWithDevTools(applyMiddleware(middleware, promise()))
)

export default store
