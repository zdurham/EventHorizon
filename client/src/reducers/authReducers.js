// AUTHENTICATION REDUCERS
// If triggered, this reducer will authenticate the user
export function authUser(state = {}, action) {
  switch(action.type) {
    case "AUTH_USER":
    case "GET_USER":
      return { ...state, user: action.payload, isAuthenticated: true}
    case "REMOVE_AUTH":
      return {...state, user: {}, isAuthenticated: false}
    default:
      return state
  }    
}