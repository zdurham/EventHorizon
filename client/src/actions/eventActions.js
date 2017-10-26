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
    type: 'ALL_EVENTS',
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

export const getUserEvents = (userId) => {
  return dispatch => {
    api.findAllByUser(userId)
    .then(res => {
      dispatch(userEvents(res.data))
    })
  }
}

export const getAllEvents = () => {
  return dispatch => {
    api.getAllEvents()
    .then(res => {
      dispatch(allEvents(res.data))
    })
  }
}
///
