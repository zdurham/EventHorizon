const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require('./config/main.js');
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Here are all of our routes on this one tiny line
routes(app)

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  config.db,
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(config.port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${config.port}!`);
});
