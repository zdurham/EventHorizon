// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function createEvent(state = {}, action) {
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, userEvents: action.payload}
    default:
      return state
  }    
}

