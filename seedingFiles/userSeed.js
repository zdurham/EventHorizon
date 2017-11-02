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
    firstName: "Brooke",
    lastName: "Goodwin",
    age: 32,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "william.bell@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "WBell",
    city: "Cary",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM1.jpg",
    firstName: "William",
    lastName: "Bell",
    age: 29,
    sex: "Male",
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
    firstName: "Kelly",
    lastName: "Powell",
    age: 32,
    sex: "Female",
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
    firstName: "Freddie",
    lastName: "Martinez",
    age: 32,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "lucas.hall@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "LucasH",
    city: "Apex",
    maritalStatus: "Married",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM11.jpg",
    firstName: "Lucas",
    lastName: "Hall",
    age: 27,
    sex: "Male",
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
    firstName: "Olivia",
    lastName: "Butler",
    age: 30,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "samantha.king@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "SamK",
    city: "Durham",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF11.jpg",
    firstName: "Samantha",
    lastName: "King",
    age: 29,
    sex: "Female",
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
    firstName: "Richard",
    lastName: "Hopkins",
    age: 25,
    sex: "Male",
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
    firstName: "Freddie",
    lastName: "Cox",
    age: 42,
    sex: "Male",
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
    firstName: "Samantha",
    lastName: "Jones",
    age: 24,
    sex: "Female",
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
    firstName: "Shannon",
    lastName: "Coleman",
    age: 45,
    sex: "Female",
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
    firstName: "Mike",
    lastName: "Bell",
    age: 38,
    sex: "Male",
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
    firstName: "Edward",
    lastName: "Nolan",
    age: 22,
    sex: "Male",
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
    firstName: "Emma",
    lastName: "Robinson",
    age: 49,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "amber.watson@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "Awatts",
    city: "Holly Springs",
    maritalStatus: "Divorced",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF16.jpg",
    firstName: "Amber",
    lastName: "Watson",
    age: 24,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "bobby.evans@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "BobbyE",
    city: "Durham",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM16.jpg",
    firstName: "Bobby",
    lastName: "Evans",
    age: 62,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "rebecca.crawford@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "RebCraw",
    city: "Cary",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF17.jpg",
    firstName: "Rebecca",
    lastName: "Crawford",
    age: 17,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "matthew.vaughn@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "MattV",
    city: "Cary",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM17.jpg",
    firstName: "Matthew",
    lastName: "Vaughn",
    age: 51,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "emily.bell@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "Belle",
    city: "Raleigh",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF18.jpg",
    firstName: "Emily",
    lastName: "Bell",
    age: 35,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "jake.boyd@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "JakeB",
    city: "Apex",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM18.jpg",
    firstName: "Jake",
    lastName: "Boyd",
    age: 27,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "rosie.scott@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "RoseS",
    city: "Morrisville",
    maritalStatus: "Married",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF19.jpg",
    firstName: "Rosie",
    lastName: "Scott",
    age: 28,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "jake.barnett@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "JakeBarn",
    city: "Raleigh",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM19.jpg",
    firstName: "Jake",
    lastName: "Barnett",
    age: 33,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "emma.price@fakemail.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "EmmaP",
    city: "Carrboro",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF2.jpg",
    firstName: "Emma",
    lastName: "Price",
    age: 30,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "john.barnett@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "JBarn",
    city: "Garner",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM2.jpg",
    firstName: "John",
    lastName: "Barnett",
    age: 38,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "paige.nolan@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "pNolan",
    city: "Morrisville",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF20.jpg",
    firstName: "Paige",
    lastName: "Nolan",
    age: 36,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "peter.wood@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "PeterW",
    city: "Chapel Hill",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM20.jpg",
    firstName: "Peter",
    lastName: "Wood",
    age: 61,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "eva.rogers@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "EvaR",
    city: "Durham",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF21.jpg",
    firstName: "Eva",
    lastName: "Rogers",
    age: 24,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "liam.coleman@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "LCole",
    city: "Raleigh",
    maritalStatus: "Divorced",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM21.jpg",
    firstName: "Liam",
    lastName: "Coleman",
    age: 46,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "ashley.butler@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "AshB",
    city: "Carrboro",
    maritalStatus: "Single",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF22.jpg",
    firstName: "Ashley",
    lastName: "Butler",
    age: 41,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "jeremy.johnson@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "JermJ",
    city: "Holly Springs",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM22.jpg",
    firstName: "Jeremy",
    lastName: "Johnson",
    age: 33,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "nicole.fuller@test.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "NicoleF",
    city: "Garner",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF23.jpg",
    firstName: "Nicole",
    lastName: "Fuller",
    age: 27,
    sex: "Female",
    createdEvents: []
  },
  {
    email: "henrik.parker@example.com",
    password: "xxxxxxxxxx",
    isAdvertiser: false,
    username: "HParker",
    city: "Chapel Hill",
    maritalStatus: "Married",
    hasChildren: true,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageM23.jpg",
    firstName: "Henrik",
    lastName: "Parker",
    age: 28,
    sex: "Male",
    createdEvents: []
  },
  {
    email: "carrboro@city.com",
    password: "$2a$10$tGB8mZJ0ZgqixpPZf9eKl.gkxhOs8QU1DSOB5nXpu2U.MIIM0gkHS",
    isAdvertiser: true,
    username: "Town of Carrboro",
    city: "Carrboro",
    profilePicUrl: "/img/carrboro-1.jpg",
    firstName: "Town of",
    lastName: "Carrboro",
    createdEvents: []
  },
  {
    email: "tiffany.barnett@example.com",
    password: "$2a$10$tGB8mZJ0ZgqixpPZf9eKl.gkxhOs8QU1DSOB5nXpu2U.MIIM0gkHS",
    isAdvertiser: false,
    control: true,
    username: "TiffanyB",
    city: "Raleigh",
    maritalStatus: "Single",
    hasChildren: false,
    profilePicUrl: "http://www.designskilz.com/random-users/images/imageF25.jpg",
    firstName: "Tiffany",
    lastName: "Barnett",
    age: 28,
    sex: "Female",
    createdEvents: []
  }
];

module.exports = userSeed;
