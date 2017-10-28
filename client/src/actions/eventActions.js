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

function allEvents(events) {
  return {
    type: 'ALL_EVENTS',
    payload: events
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

function upVote(data) {
  console.log(data)
  return {
    type: 'UPVOTE',
    eventId: data.event._id,
    userId: data.user._id,
    user: data.user,
    event: data.event
  }
}

function downVote(data) {
  console.log(data)
  return {
    type: 'DOWNVOTE',
    eventId: data.event._id,
    userId: data.user._id,
    user: data.user,
    event: data.event
  }
}

function unVote(data) {
  console.log(data)
  return {
    type: 'UNVOTE',
    eventId: data.event._id,
    userId: data.user._id,
    user: data.user,
    event: data.event
  }
}

/// ------------------------------------
// ACTIONS
// This is for creating an event
export const createEvent = (eventData, userId) => {
  return dispatch => {
    api.createEvent(eventData, userId)
      .then(res => {
        dispatch(event(res.data))
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
        dispatch(allEvents(res.data));
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
        console.log(res.data)
        dispatch(upVote(res.data))
      })
  }
}

export const downvote = (eventData, userId) => {
  return dispatch => {
    api.downvote(eventData, userId)
      .then(res => {
        console.log(res.data)
        dispatch(downVote(res.data))
      })
  }
}

export const unvote = (eventData, userId) => {
  return dispatch => {
    api.unvote(eventData, userId)
      .then(res => {
        console.log(res.data)
        dispatch(unVote(res.data))
      })
  }
}

