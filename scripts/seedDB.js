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
      db.Event.update({ _id: eventIDs[0] }, { $set: { createdBy: ObjectId(userIDs[0])}}, function() {
        process.exit(0);
      });
    })

  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
