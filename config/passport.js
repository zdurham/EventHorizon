const LocalStrategy = require('passport-local').Strategy
const BasicStrategy = require('passport-http').BasicStrategy
const User = require('../models/User')

module.exports = function(passport) {

  /// ------------------------------------------
  // PERSISTENT SESSIONS
  // This code block creates persistent sessions for the user.
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
  });
  ///
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    // While passport uses username and password by default, we'll use
    // email and password
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done) {
    // asynchronous
    // User.findOne wont fire unless data is sent back
   

    // First, check to see if the user exists by matching email.
    User.findOne({ 'email' :  email }, function(err, user) {
        // If err, returns an err
        if (err)
            return done(err);

        // check to see if theres already a user with that email
        if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

            // if there is no user with that email
            // create the user
            var newUser = new User();

            // set the user's local credentials
            newUser.email  = email;
            newUser.password = password;
            newUser.username = req.body.username;

            // save the user
            newUser.save(function(err) {
                if (err)
                    throw err;
                return done(null, newUser);
            });
        }
    });    
}));

passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
},
  function(req, email, password, done) {
    console.log('email:', email)
    console.log('password:', password)
    User.findOne({ 'email': email}, function(err, user) {
        if(err) {
          return errHandler(err);
          }
        if(!user) {
          return done(null, false, {errMsg: 'User does not exist, please' +
          ' <a class="errMsg" href="/signup">signup</a>'});
          }
        if(!user.validPassword(password)) {
          return done(null, false, {errMsg: 'Invalid password try again'});
          }
        return done(null, user);
    });

  }));
}