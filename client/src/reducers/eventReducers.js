// EVENT REDUCERS
// AUTHENTICATION REDUCERS

export function events(state = [], action) {
  
  switch(action.type) {
    case "EVENT_CREATED":
      return {...state, events: action.payload }
    case "USER_EVENTS":
      return {...state, events: action.payload }
    case "ALL_EVENTS":
      return {...state, events: action.payload }
    case "DELETE_EVENT":
      return {...state, events: action.payload}
    case "UPVOTE":
    // const upArray = state.events.filter(item => item._id !== action.eventId).concat(action.payload) 
    const upArray = state.events.map(event => {
      if (event._id === action.eventId) {
        event.vote = action.payload
      }
      return event
    })
    console.log(upArray)
      return {
        ...state, events: upArray
      }
    case "DOWNVOTE":
      // const downArray = state.events.filter(item => item._id !==action.eventId).concat(action.payload)
      const downArray = state.events.map(event => {
        if (event._id === action.eventId) {
          event.vote = action.payload
        }
        return event
      })
      return { ...state, events: downArray }
    default:
      return state
  }    
}

