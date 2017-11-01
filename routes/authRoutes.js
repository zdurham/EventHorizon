// Requiring models
const User = require('../models/User')
// Require controllers
const authControl = require('../controllers/auth')
// Requiring middleware

const reqLogin = require('../middleware/reqLogin')

module.exports = (app, passport) => {

  // Login
  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
       return console.log(err)
      }
      if (!user) {
        return res.json({error: info.message });
      }
      req.login(user, function(err) {
        if (err) console.log(err)
        return res.json(user.sanitize())
      })
    })(req, res, next)
  })

  

  // Logout
  app.post('/logout', authControl.logout)

  // Registration
  app.post('/register', passport.authenticate('local-signup'), authControl.register, authControl.error)
}
