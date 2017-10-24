// Requiring models
const User = require('../models/User')
// Requiring middleware
// const isLoggedIn = require('../middleware/authentication.js')
const reqLogin = require('../middleware/reqLogin')

// TODO:
// Refactor methods and put them into a separate auth file. Do this after the project is complete. Readability < Finished Product

module.exports = (app, passport) => {

  // Login
  app.post('/login', passport.authenticate('local-signup', { failureFlash: true }), (req, res, next) => {
    res.status(200).json(
      user.sanitize()
    )
  })

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
  app.post('/register', passport.authenticate('local-signup', { failureFlash: true }))
}
