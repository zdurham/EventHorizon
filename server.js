// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const mongoose = require("mongoose");
const config = require('./config/main.js');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes')
const flash = require('connect-flash')
const passport = require('passport')

/// ------------------------------------------
// BODY PARSER
// Configure body parser for AJAX requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json' }))
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
///

/// ------------------------------------------
// SESSION CODE AND PASSPORT
require('./config/passport')(passport); // pass passport for configuration
// Add cookieParser for auth
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({
  name: 'user_session',
  resave: true,
  saveUninitialized: true,
  secret: config.secret, // session secret
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 60000 }
  // required for passport
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
///

/// ------------------------------------------
// CORS CODE
app.use(cors())
///

/// ------------------------------------------
// Morgan Logger code to log requests
app.use(morgan('dev')); // log every request to the console
///

/// ------------------------------------------
// STATIC ASSETS
app.use(express.static("client/build"));
///

/// ------------------------------------------
// ROUTES
require('./routes/authRoutes')(app)
app.use(routes);
///


/// ------------------------------------------
// SERVER LISTENER
app.listen(config.port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${config.port}!`);
});
///
