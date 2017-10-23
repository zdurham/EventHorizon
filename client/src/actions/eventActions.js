import api from '../utils/api/eventRequests'

/// ------------------------------------
// EVENT ACTION HANDLERS
function event(eventData) {
  return {
    type: 'EVENT_CREATED',
    payload: eventData
  }
}




///

/// ------------------------------------
// ACTIONS
export const createEvent = (eventData, id) => {
  dispatch => {
    api.createEvent(eventData, id)
    .then(res => {

    })
  }
  
}

///