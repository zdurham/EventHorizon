// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function events(state = {}, action) {
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, events: action.payload }
    case "USER_EVENTS":
      return {...state, events: action.payload }
    case "ALL_EVENTS":
      return {...state, events: action.paylod }
    default:
      return state
  }    
}

