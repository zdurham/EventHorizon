const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
  }
})

UserSchema.statics.authenticate = (email, password, callback) => {
  // Find email to match to input email
  User.findOne({ email: email })
    .exec((err, user) => {
      // If err send err
      if (err) {
        return callback(err)
      }
      // If no user, send User not found err
      else if (!user) {
        var err = new Error('User not found')
        err.status = 401
        return callback(err)
      }
      // If user is found, bcrypt takes the password and checks using bcrypt's compare method
      bcrypt.compare(password, user.password, (err, result) => {
        // if result is true (match) then return user info
        if (result === true) {
          return callback(null, user);
        }
        // otherwise, do not return user info
        else {
          return callback();
        }
      })
    })
}

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

module.exports = mongoose.model('User', UserSchema);