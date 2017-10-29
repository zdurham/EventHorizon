const User = require('./User')
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
  control: {type: Boolean, default: false},
  petFriendly: { type: Boolean },
  kidFriendly: { type: Boolean},
  attendingList: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

EventSchema.index( { name: "text", description: "text" } );

//This is for attending an event

EventSchema.methods.attendEvent = function attendEvent(user, fn) {
  // Add to attending array
  this.attendingList.addToSet(user);

  // If callback fn, save and return
  if (2 === arguments.length) {
    this.save(fn);
  };
};

EventSchema.methods.unattend = function unattend(user, fn) {
  this.attendingList.pull(user);

  // If callback fn, save and return
  if (2 === arguments.length) {
    this.save(fn);
  };
};

EventSchema.methods.attending = function attending(user, cb) {
  if (this.attendingList.indexOf(user) >= 0) {
    this.unattend(user, cb);
  } else {
    this.attendEvent(user, cb);
  }
};


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
    User.findOneAndUpdate({ _id: user}, {$push: { userLikes: this._id }})

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
    User.findOneAndUpdate({ _id: user}, {$pull: { userLikes: this._id }})

    // If callback fn, save and return
    if (2 === arguments.length) {
      this.save(fn);
    };
  };

  EventSchema.methods.upvoted = function upvoted(user, cb) {
    if (this.vote.positive.indexOf(user) >= 0) {
      this.unvote(user, cb);
    } else {
      this.upvote(user, cb);
    }
  };

  EventSchema.methods.downvoted = function downvoted(user, cb) {
    if (this.vote.negative.indexOf(user) >= 0) {
      this.unvote(user, cb);
    } else {
      this.downvote(user, cb);
    }
  };

  EventSchema.methods.unvoted = function unvoted(user, cb) {
    this.unvote(user, cb)
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
