import { authUser } from './authReducers'
import { events } from './eventReducers'
import { combineReducers } from 'redux'

const appReducers = combineReducers({
  authUser,
  events
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = {}
  }

  return appReducers(state, action)
}

export default rootReducer




