// AUTHENTICATION REDUCERS
// If triggered, this reducer will authenticate the user
export function authUser(state = {}, action) {
  switch(action.type) {
    case "AUTH_USER":
    case "GET_USER":
      console.log('get and auth user', state)
      return { ...state, user: action.payload, isAuthenticated: true}
    default:
      return state
  }    
}

