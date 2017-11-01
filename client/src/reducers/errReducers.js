export function errors(state = {}, action) {
  switch (action.type) {
    case "AUTH_ERROR":
      return {...state, authError: action.payload}
    default:
      return state
  }
}