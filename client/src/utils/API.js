import axios from "axios";

export default {
  //------------------------------
  //These are for User API calls
  //------------------------------

  //This function returns the User object along with a "populated" array of their createdEvents. Pass in the user ID.
  getUserEvents: function(id) {
    return axios.get("/api/user/" + id);
  },

  //------------------------------
  //These are for Event API calls
  //------------------------------

  //Creates an event and then pushes that event into the User's "createdEvents" array
  createEvent: function(eventData) {
    return axios.post("/api/event", eventData)
  },

  //This gets every event.
  getAllEvents: function() {
    return axios.get("/api/event");
  },

  //Deletes an event. Pass in event ID.
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },

  //Gets the info for a single event.
  getSingleEvent: function(id) {
    return axios.get("/api/event/" + id);
  },

  //This call allows you to get all the events posted by a single user.
  findAllByUser: function(id) {
    return axios.get("/api/event/find/" + id);
  }

};
