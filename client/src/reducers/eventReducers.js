// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function createEvent(state = {}, action) {
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, Events: action.payload}
    case "USER_EVENTS":
      return {...state, Events: action.payload}
    default:
      return state
  }    
}

