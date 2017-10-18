// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require('./config/main.js');
const app = express();
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routes = require('./routes')

/// ------------------------------------------ 
// BODY PARSER
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
///

/// ------------------------------------------ 
// PASSPORT CODE
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
///

/// ------------------------------------------ 
// MONGOOSE CODE
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  config.db,
  {
    useMongoClient: true
  }
);


/// ------------------------------------------
// Morgan Logger code to log requests
app.use(morgan('dev')); // log every request to the console
// Add cookieParser for auth
app.use(cookieParser()); // read cookies (needed for auth)
///

/// ------------------------------------------
// STATIC ASSETS
app.use(express.static("client/build"));
///

/// ------------------------------------------
// ROUTES
app.use(routes)
// code below is going to be used, or at least a version of it
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
///


/// ------------------------------------------
// SERVER LISTENER
app.listen(config.port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${config.port}!`);
});
///
