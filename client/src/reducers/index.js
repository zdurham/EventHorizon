import { authUser } from './authReducers'
import { events } from './eventReducers'
import { combineReducers } from 'redux'

const appReducers = combineReducers({
  authUser,
  events
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state.authUser = undefined
    state.events.userEvents = []
    state.events.userAttendingEvents = []
    state.events.userCreatedEvents = []
  }

  return appReducers(state, action)
}

export default rootReducer




