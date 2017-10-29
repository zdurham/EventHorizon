import { authUser } from './authReducers'
import { events } from './eventReducers'
import { search } from './searchReducers'
import { combineReducers } from 'redux'

const appReducers = combineReducers({
  authUser,
  events,
  search
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state.authUser = undefined
    state.events.userEvents = undefined
  }

  return appReducers(state, action)
}

export default rootReducer




