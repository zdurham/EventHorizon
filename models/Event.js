
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String },
  advert: { type: Boolean },
  genre: { type: String },
  description: { type: String },
  date: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
  allDay: { type: Boolean },
  location: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String, default: "NC" },
  zipCode: { type: String },
  cost: { type: String },
  link: { type: String },
  petFriendly: { type: Boolean },
  kidFriendly: { type: Boolean},
  attendingList: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});


//All of this below is related to the upvoting/downvoting stuff

  EventSchema.add({
    vote: {
      positive: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      negative: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    }
  });

  EventSchema.methods.upvote = function upvote(user, fn) {
    // Reset vote if existed
    this.vote.negative.pull(user);

    // Upvote
    this.vote.positive.addToSet(user);

    // If callback fn, save and return
    if (2 === arguments.length) {
      this.save(fn);
    };
  };

  EventSchema.methods.downvote = function downvote(user, fn) {
    // Reset vote if existed
    this.vote.positive.pull(user);

    // Downvote
    this.vote.negative.addToSet(user);

    // If callback fn, save and return
    if (2 === arguments.length) {
      this.save(fn);
    };
  };

  EventSchema.methods.unvote = function unvote(user, fn) {
    this.vote.negative.pull(user);
    this.vote.positive.pull(user);

    // If callback fn, save and return
    if (2 === arguments.length) {
      this.save(fn);
    };
  }

  EventSchema.methods.upvoted = function upvoted(user, cb) {
    if (this.vote.positive.indexOf(user) >= 0) {
      console.log(this.vote.positive.indexOf(user))
      this.unvote(user, cb);
    } else {
      console.log("asdf");
      this.upvote(user, cb);
    }
  };

  EventSchema.methods.downvoted = function downvoted(user, cb) {
    if (this.vote.negative.indexOf(user) >= 0) {
      console.log(this.vote.positive.indexOf(user))
      this.unvote(user, cb);
    } else {
      console.log("asdf");
      this.downvote(user, cb);
    }
  };

  EventSchema.methods.voted = function voted(user) {
    if (user._id) {
      return schema.methods.voted.call(this, user._id);
    };

    return schema.methods.upvoted(user) || schema.methods.downvoted(user);
  }

  EventSchema.virtual('upvotes').get(function upvotes() {
    return this.vote.positive.length;
  });

  EventSchema.virtual('downvotes').get(function downvotes() {
    return this.vote.negative.length;
  });

  EventSchema.virtual('votes').get(function votes() {
    var positives = this.vote.positive;
    var negatives = this.vote.negative;
    return [].concat(positives).concat(negatives).length;
  });

  EventSchema.virtual('voteScore').get(function voteScore() {
    return this.upvotes - this.downvotes;
  });


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
