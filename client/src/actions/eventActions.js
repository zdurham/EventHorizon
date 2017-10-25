import api from '../utils/api/eventRequests'

/// ------------------------------------
// EVENT ACTION HANDLERS
function event(eventData) {
  return {
    type: 'EVENT_CREATED',
    payload: eventData
  }
}

function userEvents(eventData) {
  return {
    type: 'USER_EVENTS',
    payload: eventData
  }
}

function allEvents(eventData) {
  return {
    type: 'All_EVENTS',
    payload: eventData
  }
}




///

/// ------------------------------------
// ACTIONS
// This is for creating an event
export const createEvent = (eventData, userId) => {
  return dispatch => {
    api.createEvent(eventData, userId)
      .then(res => {
        dispatch(event(eventData))
      })
  }
}

// This gathers the events that a specific user has created
export const getUserEvents = (userId) => {
  return dispatch => {
    api.findAllByUser(userId)
      .then(res => {
        dispatch(userEvents(res.data))
      })
  }
}

// This is for gathering all events for the events page
export const getAllEvents = () => {
  return dispatch => {
    api.getAllEvents()
    .then(res => {
      dispatch()
    })
  }
}
///