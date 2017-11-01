import { authUser } from './authReducers'
import { events } from './eventReducers'
import { errors } from './errReducers'
import { combineReducers } from 'redux'

const appReducers = combineReducers({
  authUser,
  events,
  errors
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducers(state, action)
}

export default rootReducer




