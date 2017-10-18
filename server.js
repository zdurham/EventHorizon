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
// SESSION CODE
// Add cookieParser for auth
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret, // session secret
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 60000 }
}));
///

/// ------------------------------------------
// PERSISTENT SESSIONS
// Make user info available on all templates
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId
  next();
})
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

///


/// ------------------------------------------
// SERVER LISTENER
app.listen(config.port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${config.port}!`);
});
///
