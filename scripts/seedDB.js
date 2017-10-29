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
var events = [];
var advertiserID = [];
var controlID = [];

const businessLogic = (num) => {

  if (num == events.length) {
    console.log(`Seeding complete with a total of ${num} events and ${userIDs.length+1} users seeded.`)
    return mongoose.disconnect();
  }

  //Setting some variables
  let userUpdate1 = false;
  let userUpdate2 = false;
  let userIdNum = Math.floor(Math.random() * userIDs.length);
  let idString = userIDs[userIdNum];
  if (events[num].advert) {
    idString = advertiserID[0];
  }
  if (events[num].control) {
    idString = controlID[0];
  }
  let eventString = events[num]._id;
  let randomNumber = Math.random();
  if (randomNumber > 0.2) {
    randomNumber = 0;
  }

  //This is updating the User with the event they just created
  db.User.update({ _id: idString }, { $push: { createdEvents: ObjectId(eventString) }}, function(){
    userUpdate1=true;
    db.Event
      .findById(
        eventString,
        function (err, eventObj) {
          if (err) return handleError(err);

          if (eventObj.advert) {
            eventObj.createdBy = ObjectId(advertiserID[0]);
          } else {
            eventObj.createdBy = ObjectId(idString);
          }
          //Another for loop for populating attendingList

          let popArray = [];
          let attendArray = [];
          for (let j = 0; j < userIDs.length; j++) {
            if (Math.random() < 0.4 + randomNumber) {
              attendArray.push(userIDs[j]);
              popArray.push(userIDs[j]);
            }
          }
          db.User.update(
            { _id: { $in: attendArray } },
            { $push: { attendingEvents: ObjectId(eventString) }},
            {multi: true},
            function(){

              userUpdate2=true;

              eventObj.attendingList = popArray;

              //Another for loop for upvoting and downvoting
              let downvoteArray = [];
              let upvoteArray = [];
              for (let k = 0; k < userIDs.length; k++) {
                if (Math.random() < 0.4 + randomNumber) {
                  upvoteArray.push(userIDs[k]);
                } else if (Math.random() > 0.8) {
                  downvoteArray.push(userIDs[k]);
                }
              }
              //End of upvote and downvote for loop and now saving the array value
              eventObj.vote.positive = upvoteArray;
              eventObj.vote.negative = downvoteArray;

              eventObj.save(function (err, updatedEventObj) {
                if (err) return handleError(err);
                businessLogic(num+1);
              });
          });
    });
  });



}

console.log("Seeding...");
db.User
  .remove({})
  .then(() => db.User.insertMany(seed.userSeed))
  .then(data => {
    let controlData = data;
    userIDs = data.filter(function(obj){return obj.isAdvertiser !== true}).map(id => id._id);
    advertiserID = controlData.filter(function(obj){return obj.isAdvertiser}).map(id => id._id);
    controlID = controlData.filter(function(obj){return obj.control}).map(id => id._id);
  })
  .then(() => {

    db.Event
      .remove({})
      .then(() => db.Event.insertMany(seed.eventSeed))
      .then(data => {events = data})
      .then(() => {
          businessLogic(0);
      });
  });
