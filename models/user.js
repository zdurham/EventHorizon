const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
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
  isAdvertiser: {
    type: Boolean,
    default: false
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String }
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  createdEvents: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
})

// checking if password is valid
UserSchema.method('validPassword', function(password) {
  return bcrypt.compareSync(password, this.password);
});

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

