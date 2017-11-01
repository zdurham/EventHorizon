export function errors(state = {}, action) {
  switch (action.type) {
    case "LOG_ERROR":
      return { ...state, logError: action.payload }
    case "REG_ERROR":
      return { ...state, regError: action.payload }
    case "AUTH_USER":
      return { ...state, logError: undefined, regError: undefined }
    default:
      return state
  }
}