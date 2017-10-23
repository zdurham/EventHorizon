import { authUser } from './authReducers'
import { events } from './eventReducers'
import { combineReducers } from 'redux'


export default combineReducers({
  authUser,
  events
})

