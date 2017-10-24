// Requiring models
const User = require('../models/User')
// Requiring middleware
// const isLoggedIn = require('../middleware/authentication.js')
const reqLogin = require('../middleware/reqLogin')

// TODO:
// Refactor methods and put them into a separate auth file. Do this after the project is complete. Readability < Finished Product

module.exports = (app) => {

  // Login
  app.post('/login', passport.authenticate('local-signup', { failureFlash: true }), (req, res, next) => {
    res.status(200).json(
      user.sanitize()
    )

  // Logout
  app.post('/logout', (req, res, next) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          return next(err)
        }
        else {
          res.clearCookie('user_session', { path: '/' })
          res.send(console.log('User logged out'))
        }
      })
    }
  })

  // Registration
  app.post('/register', (req, res, next) => {

    // First check to make sure all fields were filled out
    if (req.body.username && req.body.email && req.body.password && req.body.confPassword) {

      // If yes, continue with checking whether passwords matched. If they don't match, send an error on with next()
      if (req.body.password !== req.body.confPassword) {
        let err = new Error('Passwords do not match')
        err.status = 400
        return next(err)
      }

      // If no problems with password, create user object to store input data.
      let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      };

      // Save user object to mongo
      User.create(user, (err, user) => {
        if (err) {
          return next(err)
        }
        else {
          // Set the session ID as the user's unique id
          req.session.userId = user._id
          // Send user information to the client side in a JSON object if successful
          // Sanitize is a method in the user schema
          res.status(200).json(
            user.sanitize()
          )
        }
      })
    }
    // Should we fail the input check, send error stating they need to fill out all fields
    else {
      let err = 'All fields are required';
      err.status = 400;
      return next(err);
    }
  })
}
