const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
var ObjectId = require('mongodb').ObjectID;
const seed = require("../seedingFiles");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/eventsdb",
  {
    useMongoClient: true
  }
);

var userIDs = [];
var eventIDs = [];

db.User
  .remove({})
  .then(() => db.User.insertMany(seed.userSeed))
  .then(data => {
    userIDs = data.map(id => id._id);
    db.Event
    .remove({})
    .then(() => db.Event.insertMany(seed.eventSeed))
    .then(data => {
      eventIDs = data.map(id => id._id);

      //Start of for loop to populate each event
      for (let i = 0; i < eventIDs.length; i++) {

        //Setting some variables
        let userIdNum = Math.floor(Math.random() * userIDs.length);
        let idString = userIDs[userIdNum];
        let eventString = eventIDs[i];
        let randomNumber = Math.random();
        if (randomNumber > 0.2) {
          randomNumber = 0;
        }

        //This is updating the User with the event they just created
        db.User.update({ _id: idString }, { $push: { createdEvents: ObjectId(eventString) }}, function(){});

        //Now going to update the Event
        db.Event
        .findById(
          eventString,
          function (err, eventObj) {
            if (err) return handleError(err);

            eventObj.createdBy = ObjectId(idString);

            //Another for loop for populating attendingList

            let popArray = [];
            for (let j = 0; j < userIDs.length; j++) {
              if (Math.random() < 0.4 + randomNumber) {
                //Updating User real quick
                db.User.update({ _id: userIDs[j] }, { $push: { attendingEvents: ObjectId(eventString) }}, function(){});
                popArray.push(userIDs[j]);
              }
            }
            //End of attending for loop and now saving the array value

            eventObj.attendingList = popArray;

            //Another for loop for upvoting
            let upvoteArray = [];
            for (let k = 0; k < userIDs.length; k++) {
              if (Math.random() < 0.6 + randomNumber) {
                upvoteArray.push(userIDs[k]);
              }
            }
            //End of upvote for loop and now saving the array value
            eventObj.vote.positive = upvoteArray;

            //Another for loop for downvoting
            let downvoteArray = [];
            for (let l = 0; l < userIDs.length; l++) {
              if (Math.random() < 0.3 + randomNumber) {
                downvoteArray.push(userIDs[l]);
              }
            }
            //End of downvote for loop and now saving the array value
            eventObj.vote.negative = downvoteArray;

            eventObj.save(function (err, updatedEventObj) {
              if (err) return handleError(err);
              console.log("stuff done for event number: ", i + 1);
              mongoose.connection.close();
            });
        })
      }
      //End of for loop

    });

  });
