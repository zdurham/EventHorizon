const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
var ObjectId = require('mongodb').ObjectID;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/eventsdb",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    email: "brooke.goodwin@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "bGoodwin",
    city: "Carrboro",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF13.jpg",
    profile: {
      firstName: "Brooke",
      lastName: "Goodwin"
    },
    age: 32,
    sex: "female",
    createdEvents: []
  },
  {
    email: "william.bell@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "WBell",
    city: "Apex",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM1.jpg",
    profile: {
      firstName: "William",
      lastName: "Bell"
    },
    age: 29,
    sex: "male",
    createdEvents: []
  },
  {
    email: "kelly.powell@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "kPowell",
    city: "Raleigh",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF1.jpg",
    profile: {
      firstName: "Kelly",
      lastName: "Powell"
    },
    age: 32,
    sex: "female",
    createdEvents: []
  },
  {
    email: "freddie.martinez@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "FMartinez",
    city: "Chapel Hill",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM10.jpg",
    profile: {
      firstName: "Freddie",
      lastName: "Martinez"
    },
    age: 32,
    sex: "male",
    createdEvents: []
  },
  {
    email: "lucas.hall@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "LucasH",
    city: "Efland",
    maritalStatus: "Married",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM11.jpg",
    profile: {
      firstName: "Lucas",
      lastName: "Hall"
    },
    age: 27,
    sex: "male",
    createdEvents: []
  },
  {
    email: "olivia.butler@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "OliviaB",
    city: "Raleigh",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF10.jpg",
    profile: {
      firstName: "Olivia",
      lastName: "Butler"
    },
    age: 30,
    sex: "female",
    createdEvents: []
  },
  {
    email: "samantha.king@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "SamK",
    city: "Hillsborough",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF11.jpg",
    profile: {
      firstName: "Samantha",
      lastName: "King"
    },
    age: 29,
    sex: "female",
    createdEvents: []
  },
  {
    email: "richard.hopkins@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "RichH",
    city: "Chapel Hill",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM12.jpg",
    profile: {
      firstName: "Richard",
      lastName: "Hopkins"
    },
    age: 25,
    sex: "male",
    createdEvents: []
  },
  {
    email: "freddie.cox@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "FCox",
    city: "Cary",
    maritalStatus: "Married",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM13.jpg",
    profile: {
      firstName: "Freddie",
      lastName: "Cox"
    },
    age: 42,
    sex: "male",
    createdEvents: []
  },
  {
    email: "samantha.jones@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "SamJ",
    city: "Carrboro",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF12.jpg",
    profile: {
      firstName: "Samantha",
      lastName: "Jones"
    },
    age: 24,
    sex: "female",
    createdEvents: []
  },
  {
    email: "shannon.coleman@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "ShanC",
    city: "Durham",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF14.jpg",
    profile: {
      firstName: "Shannon",
      lastName: "Coleman"
    },
    age: 45,
    sex: "female",
    createdEvents: []
  },
  {
    email: "mike.bell@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "MikeB",
    city: "Durham",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM14.jpg",
    profile: {
      firstName: "Mike",
      lastName: "Bell"
    },
    age: 38,
    sex: "male",
    createdEvents: []
  },
  {
    email: "edward.nolan@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "EdN",
    city: "Raleigh",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM15.jpg",
    profile: {
      firstName: "Edward",
      lastName: "Nolan"
    },
    age: 22,
    sex: "male",
    createdEvents: []
  },
  {
    email: "emma.robinson@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "Emma",
    city: "Morrisville",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF15.jpg",
    profile: {
      firstName: "Emma",
      lastName: "Robinson"
    },
    age: 49,
    sex: "female",
    createdEvents: []
  }
];

const eventSeed = [
  {
    name : "alt-J",
    genre : "Arts",
    description : "Alt-J will be performing their fall headling tour live at the Duke Energy Center's Memorial Auditorium on Nov. 3.",
    link : "http://www.dukeenergycenterraleigh.com/event/alt-j-private-event-8559",
    date : Date("2017-011-03T00:00:00.000Z"),
    startTime : "20:00",
    endTime : "23:00",
    allDay : false,
    location : "Memorial Auditorium at Duke Energy Center for the Performing Arts",
    address : "2 E. South St.",
    city : "Raleigh",
    zipCode : "27601",
    kidFriendly : false,
    petFriendly : false,
    advert : false,
    vote : {
        negative : [],
        positive : []
    },
    attendingList : [],
    state : "NC",
    __v : 0
},
{
  name : "General Hugh Shelton Leadership Forum",
  genre : "Social",
  description : "Now in its 16th year, this annual seminar series focuses on leadership development and its importance, working closely with Research Triangle Park based industries, local businesses and executives and students from area colleges and universities.",
  link : "https://sheltonleadership.ncsu.edu/",
  date : Date("2017-011-03T00:00:00.000Z"),
  startTime : "07:45",
  endTime : "14:00",
  allDay : false,
  location : "McKimmon Conference & Training Center",
  address : "1101 Gorman St.",
  city : "Raleigh",
  zipCode : "27606",
  kidFriendly : true,
  petFriendly : false,
  advert : false,
  vote : {
      negative : [],
      positive : []
  },
  attendingList : [],
  state : "NC",
  __v : 0
}
]

var userIDs = [];
var eventIDs = [];



db.User
  .remove({})
  .then(() => db.User.insertMany(userSeed))
  .then(data => {
    userIDs = data.map(id => id._id);
    db.Event
    .remove({})
    .then(() => db.Event.insertMany(eventSeed))
    .then(data => {
      eventIDs = data.map(id => id._id);

      //Start of for loop to populate each event
      for (let i = 0; i < eventIDs.length; i++) {

        //Setting some variables
        let userIdNum = Math.floor(Math.random() * userIDs.length);
        let idString = userIDs[userIdNum];
        let eventString = eventIDs[i];

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
              if (Math.random() < 0.4) {
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
              if (Math.random() < 0.6) {
                upvoteArray.push(userIDs[k]);
              }
            }
            //End of upvote for loop and now saving the array value
            eventObj.vote.positive = upvoteArray;

            //Another for loop for downvoting
            let downvoteArray = [];
            for (let l = 0; l < userIDs.length; l++) {
              if (Math.random() < 0.3) {
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
