const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEventSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true},
  startTime: { type: String },
  endTime: { type: String },
  location: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  state: { type: String, default: "NC" },
  zipCode: { type: String },
  cost: { type: String },
  link: { type: String },
  petFriendly: { type: Boolean },
  kidFriendly: { type: Boolean}
});

const UserEvent = mongoose.model("UserEvent", userEventSchema);

module.exports = UserEvent;
