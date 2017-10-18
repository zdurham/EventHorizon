/*//////

Reference for notes: https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537

*///////

// Dependencies for this module
const db = require('../models')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator/check');
const config = require('./main.js')

// Function to be exported. This takes two arguments,
// the passport object, and the user object, which in our case will be db.User
module.exports = (passport, user) => {
  user = db.User;



  let LocalStrategy = require('passport-local').Strategy

  // This function serializes the user, allowing us to hold onto user data in sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id);
    });


  // used to deserialize the user when loggin out
  passport.deserializeUser(function(id, done) {
    db.User.findById(id).then(function(user) {
      if(user){
        done(null, user.get());
        }
      else{
        done(user.errors,null);
        }
    });
  });

  
  // Local sign-up - This strategy is used for authentication when the user is registering their profile
  passport.use('local-signup', new LocalStrategy({
   usernameField: 'email',
   passwordField: 'password',
   passReqToCallback: true 
  },

  
  (req, email, password, done) => {
    // This takes the password and passes it through bCrypt
    // and returns a hash
    const generateHash = (password) => {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    }

    // Here, we check the database to see if the user's email they entered
    // is already in use by another user
    db.User.findOne({
      where: {
        email: email
      }
    }).then(user => {

      // If email is taken, return an error message
      if (user) {
        return done(null, false, req.flash('signUpFailure', 'That email address is already taken'));
      }

      // If the email is not taken, the function stores
      // the user data in our mySQL database using sequelize
      else {
        const userPassword = generateHash(password)
        
        const data = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          username: req.body.username,
          password: userPassword,
          about: req.body.about,
          image: req.body.image
        };

        db.User.create(data).then(function(newUser, created) {
          if (!newUser) {
            return done(null, false);
          }

          if (newUser) {
            return done(null, newUser)
          }
        });
      };
    });
  }
  
  ));

  // Local sign-in - used when returning users are logging in
  passport.use('local-signin', new LocalStrategy(
    {
    // by default, local strategy uses uxsername and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true 
    },
      
    function(req, email, password, done) {

      // Compares password input and the hash in the database
      var isValidPassword = function(userpass, password) {
        return bcrypt.compareSync(password, userpass);
        }
    
      // Checks the database for the email
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        
        // If no user by that email address, we return an error message with connect-flash
        if (!user) {
          return done(null, false, req.flash('emailErr', 'Email does not exist'));
        }
        // If the password is incorrect, we return an error message with connect-flash
        if (!isValidPassword(user.password, password)) {
          return done(null, false, req.flash('passErr' , 'Incorrect password.'));
        }

        // Return userInfo if both email and password are valid 
        var userinfo = user.get()
        console.log(userinfo)
        return done(null, userinfo);

      }).catch(function(err) {
        console.log("Error:", err);
          return done(null, false, req.flash('err', 'Something went wrong with your sign-ing'));
      });
    }
   ));
}
