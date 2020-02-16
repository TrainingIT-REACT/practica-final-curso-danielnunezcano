import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import playerActions from './reducers/playerActions'
import user from './reducers/user'
import addSong from './middlewares/addSong'

const store = createStore(
  combineReducers({ playerActions, user }),
  composeWithDevTools(applyMiddleware(addSong, thunk))
)

export default store
