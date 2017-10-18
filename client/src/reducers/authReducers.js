// reducers

function getUser(state = {}, action) {
  switch(action.type) {
    case "GET_USER":
      return Object.assign({}, state, {
        user: action.payload,
        isAuthenticated: true
      })
    default:
      return state
  }    
}

export default getUser;