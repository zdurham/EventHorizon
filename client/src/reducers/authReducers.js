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

// If triggered, this reducer will remove user authentication and remove user information from the store
export function removeAuthUser(state = {}, action) {
  switch(action.type) {
    case "REMOVE_AUTH":
    console.log('remove-state', state)
      return { ...state, user: action.payload, isAuthenticated: false}
    default:
      return state
  }
}

// export function getAuth(state = {}, action) {
//   switch(action.type) {
//     case "GET_AUTH":
//       return { ...state, user: action.payload, isAuthenticated: true}
//     default: 
//       return state
//   }
// }

