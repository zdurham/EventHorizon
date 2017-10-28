import axios from "axios";

export default {
  //------------------------------
  //These are for User API calls
  //------------------------------

  //This function returns the User object along with a "populated" array of their createdEvents. Pass in the user ID.
  getUserEvents: function(id) {
    return axios.get("/api/user/" + id);
  },

  //This function returns the User object along with a populated array of their attendingEvents. Pass in the user ID.
  getUserAttendingEvents: function(id) {
    return axios.get("/api/user/attending/" + id);
  },

  //------------------------------
  //These are for Event API calls
  //------------------------------

  //Creates an event and then pushes that event into the User's "createdEvents" array. id refers to user ID.
  createEvent: function(eventData, userId) {
    return axios.post("/api/event/createEvent/" + userId, eventData)
  },

  //This gets every event.
  getAllEvents: function() {
    return axios.get("/api/event");
  },

  //Deletes an event. Pass in event ID.
  deleteEvent: function(eventId) {
    return axios.post("/api/event/remove", {eventId});
  },

  //This call allows you to get all the events posted by a single user. Pass in user ID.
  findAllByUser: function(userId) {
    return axios.get("/api/event/find/" + userId);
  },

  //This will toggle the upvotes. id is the User ID. All you need to pass in through the eventData is the ID of the event using "_id" format.
  upvote: function(eventId, userId) {
    return axios.post("/api/event/upvote/", {eventId, userId});
  },

  //Same as the upvote. Just make sure to have the event id formatted with the key "_id".
  downvote: function(eventId, userId) {
    return axios.post("/api/event/downvote/", {eventId, userId});
  },

  // Removes vote upon double-clicking of a voting icon
  unvote: function(eventId, userId) {
    return axios.post('api/event/unvote', {eventId, userId})
  },

  //This function is to attend an event. Similar to upvote. id is the User ID. Pass in through the eventData is the ID of the event using "_id" format.
  attendEvent: function(eventId, userId) {
    return axios.post("/api/event/attend/", {eventId, userId});
  }

};
