export function errors(state = {}, action) {
  switch (action.type) {
    case "AUTH_ERROR":
      return {...state, authError: action.payload}
    case "AUTH_USER":
      return {...state, authError: undefined}
    default:
      return state
  }
}