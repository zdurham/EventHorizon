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


function deleteOne(eventData) {
  return {
    type: 'DELETE_EVENT',
    payload: eventData
  }
}

function getOne(eventData) {
  return {
    type: 'ONE_EVENT',
    payload: eventData
  }
}

function upVote(eventData) {
  return {
    type: 'UPVOTE',
    payload: eventData
  }
}

function downVote(eventData) {
  return {
    type: 'DOWNVOTE',
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
        dispatch(allEvents(res.data))
      })
  }
}

// This is for deleting an event
export const deleteEvent = (eventId) => {
  return dispatch => {
    api.deleteEvent(eventId)
      .then(res => {
        dispatch(deleteOne(res.data))
      })
  }
}

export const getOneEvent = (eventId) => {
  return dispatch => {
    api.getSingleEvent(eventId)
      .then(res => {
        dispatch(getOne(res.data))
      })
  }
}

export const upvote = (eventData, userId) => {
  return dispatch => {
    api.upvote(eventData, userId)
      .then(res => {
        dispatch(upVote(res.data))
      })
  }
}

export const downvote = (eventData, userId) => {
  return dispatch => {
    api.downvote(eventData, userId)
      .then(res => {
        dispatch(downVote(res.data))
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
