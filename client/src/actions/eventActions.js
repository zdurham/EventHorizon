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
export const createEvent = (eventData, userId) => {
  return dispatch => {
    api.createEvent(eventData, userId)
    .then(res => {
      dispatch(event(eventData))
    })
  }
  
}

///