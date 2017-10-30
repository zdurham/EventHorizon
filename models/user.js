const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  control: {
    type: Boolean,
    default: false
  },
  isAdvertiser: {
    type: Boolean,
    default: false
  },
  username: {
    type: String,
    unique: true
  },
  city: {
    type: String
  },
  maritalStatus: {
    type: String
  },
  hasChildren: {
    type: Boolean
  },
  profilePicUrl: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  userLikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  createdEvents: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }],
  attendingEvents: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
})

//Methods for adding events that user is attending

UserSchema.methods.attending = function attending(eventId, cb) {
  if (this.attendingEvents.indexOf(eventId) >= 0) {
    this.unattend(eventId, cb);
  } else {
    this.attend(eventId, cb);
  }
};

UserSchema.methods.unattend = function unattend(eventId, fn) {
  this.attendingEvents.pull(eventId);

  // If callback fn, save and return
  if (2 === arguments.length) {
    this.save(fn);
  };

};

UserSchema.methods.attend = function attend(eventId, fn) {


  // Attend
  this.attendingEvents.addToSet(eventId);

  // If callback fn, save and return
  if (2 === arguments.length) {
    this.save(fn);
  };
};


// THIS HAS BEEN REPLACED
// UserSchema.methods.validPassword = function(password) {
//   const user = this
//   bcrypt.compare(password, user.password, (err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       console.log('this is the respose', data)
//       if (data === true ) {
//         return true
//       }
//       else {
//         return false
//       }
//     }
//   });
// };

// This method hashes the password before saving it to Mongo
UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash;
    next();
  })
})

UserSchema.method('sanitize', function() {
  let omittedFields = [
    'password',
    'email',
    '__v'
  ]
  return _.omit(this.toObject(), omittedFields)
})


let User = mongoose.model("User", UserSchema)

module.exports = User
