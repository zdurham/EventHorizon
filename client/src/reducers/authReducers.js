// AUTHENTICATION REDUCERS
// If triggered, this reducer will authenticate the user
export function authUser(state = {}, action) {
  switch(action.type) {
    case "AUTH_USER":
    case "GET_USER":
      // console.log('get and auth user', state)
      return { ...state, user: action.payload, isAuthenticated: true}
    // These reducers are getting their actions from the eventActions folder
    case "UPVOTE":
      return {...state, user: action.user}
    case "DOWNVOTE":
      return {...state, user: action.user}
    case "UNVOTE":
      return {...state, user: action.user}
    case "ATTEND":
      return {...state, user: action.user}
    case "UNATTEND":
      return {...state, user: action.user}
    case "DELETE_EVENT":
      return {...state, user: action.user}
    default:
      return state
  }
}
