const db = require("../models");
const saltRounds = 10;
var bcrypt = require('bcrypt');

module.exports = {

  register: function(req, res) {
    // const password = req.body.password;
    // const newUser = new db.User({
    //   username: req.body.username,
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   age: req.body.age,
    //   sex: req.body.sex,
    //   password: req.body.password
    // });

    // console.log(newUser);
    // console.log(password)
    // bcrypt.hash(password, saltRounds)
    // .then(function(hash) {
    //   newUser.hash = hash;
    //   console.log(hash);
    // });

    db.User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  },

  login: function(req, res) {
    db.User.findOne({ username: req.body.username }, function(err, user) {

      bcrypt.compare(req.body.password, hash)
      .then(function(res) {
        // res == true
      });


      if (!user.validPassword(req.body.password)) {
        console.log("error");
      } else {
        console.log("password matched");
      }
    });
  }
};
