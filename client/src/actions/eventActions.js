import api from '../utils/api/eventRequests'
import _ from 'lodash'

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

function deleteOne(eventId) {
  return {
    type: 'DELETE_EVENT',
    eventId: eventId
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

function attend(data) {
  return {
    type: 'ATTEND',
    eventId: data.event._id,
    userId: data.user._id,
    user: data.user,
    event: data.event
  }
}

function unattend(data) {
  return {
    type: 'UNATTEND',
    eventId: data.event._id,
    userId: data.user._id,
    user: data.user,
    event: data.event
  }
}

function attendingEvents(data) {
  return {
    type: 'USER_ATTENDING',
    payload: data
  }
}

function searchAction(data) {
  return {
    type: "SEARCH",
    payload: data
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

export const getUserAttending = (userId) => {
  return dispatch => {
    api.getUserAttendingEvents(userId)
      .then(res => {
        dispatch(attendingEvents(res.data))
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
        dispatch(deleteOne(eventId))
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

export const unvote = (eventData, userId) => {
  return dispatch => {
    api.unvote(eventData, userId)
      .then(res => {
        dispatch(unVote(res.data))
      })
  }
}

export const attendEvent = (eventId, userId) => {
  return dispatch => {
    api.attendEvent(eventId, userId)
      .then(res => {
        dispatch(attend(res.data))
      })
  }
}

export const unAttendEvent = (eventId, userId) => {
  return dispatch => {
    api.attendEvent(eventId, userId)
      .then(res => {
        dispatch(unattend(res.data))
      })
  }
}

export const search = (searchTerms, events ) => {
  searchTerms = searchTerms.toLowerCase();
  return dispatch => {
    // filter the array by search term
    let data = events.filter(event => {
      if (event.name.toLowerCase().search(searchTerms) > -1  || event.description.toLowerCase().search(searchTerms) > -1 ) {
        return true
      }
      return false
    })

    // dispatch the action
    dispatch(searchAction(data))

  }
}
