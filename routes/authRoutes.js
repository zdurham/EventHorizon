const authControl = require('../controllers/auth');
const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');

// Passport middleware
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });


module.exports = (app) => {
  const routes = express.Router()
  const authRoutes = express.Router()

  // Here we mount the auth routes onto the main root route
  routes.use('/auth', authRoutes);

  // Auth routes mounted on /auth
  authRoutes.use('/auth', authRoutes)

  // When we post /register, we use the register controller function
  authRoutes.post('/register', authControl.register)

  // When we post /login, we use the login controller function
  authRoutes.post('/login', authControl.login)

  // App uses root route
  app.use('/', routes)
}
