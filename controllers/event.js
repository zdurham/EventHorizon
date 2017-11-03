const db = require("../models");


module.exports = {
  createEvent: function(req, res) {
    var userId = req.params.id;
    req.body.createdBy = userId

    //checking if user is advertiser
    db.User
      .findById({ _id: userId })
      .then(function(dbModel) {

        //If user is advertiser

        if(dbModel.isAdvertiser) {
          //saving event to mongoose
          req.body.advert = true;
          db.Event.create(req.body, function(error, doc) {
            //sending errors
            if (error) {
              res.send(error);
            } else {
            // Find our user and push the new Event id into the User's Events array
            db.User.findOneAndUpdate({ _id: userId }, { $push: { "createdEvents": doc._id } }, { new: true }, function(err, newdoc) {
              if (err) {
                res.send(err);
              } else {
                res.json(doc);
              }
            });
            }
          });

          //If regular user

        } else {
          //saving event to mongoose
          db.Event.create(req.body, function(error, doc) {
            //sending errors
            if (error) {
              res.send(error);
            } else {
            // Find our user and push the new Event id into the User's Events array
            db.User.findOneAndUpdate({ _id: userId }, { $push: { "createdEvents": doc._id } }, { new: true }, function(err, newdoc) {
              if (err) {
                res.send(err);
              } else {
                res.json(doc);
              }
            });
            }
          });
        }
      })


  },
  remove: function(req, res) {
    db.Event
      .findOneAndRemove({ _id: req.body.eventId }, (err, event) => {
        db.User.findOneAndUpdate({ _id: req.body.userId }, {$pull: { "createdEvents": req.body.eventId }}, {new: true}, (err, user) => {
          res.json({
            user: user.sanitize(),
          })
        })
        // res.json(data)
      })
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Event
      .find()
      .where('date').gte(Date.now())
      .populate('createdBy', '-_id -__v -email -password -profile -age -sex -createdEvents -maritalStatus -hasChildren -attendingEvents')
      .sort({ date: 1, startTime: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllByUser: function(req, res) {

    let userId = req.body.userId;
    // console.log('req.body', req.body)
    // db.Event.find({ createdBy: req.body.userId })
    // .then((events) => {
    //   console.log(events)
    //   res.json(events)
    // })
    // .catch(err => res.status(422).json(err))

    // checking if user is advertiser
    db.User
      .findOne({ _id: userId })
      .then((user) => {
        if(user.isAdvertiser === true) {
          db.Event
            .find({ createdBy: userId })
            .populate('attendingList', '-_id -__v -email -password')
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else {
          db.Event
            .find({ createdBy: userId })
            .populate('attendingList', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },

  upvoteEvent: function(req, res) {
    var userId = req.body.userId;
    db.User.findOneAndUpdate({ _id: userId }, {$push: { userLikes: req.body.eventId }}, {new: true})
    .then(user => {
      db.Event.findById({ _id: req.body.eventId })
      .then(event => event.upvoted(userId, function(){
        res.json({
          event: event,
          user: user.sanitize()
        })
      }))
    })
    .catch(err => res.status(422).json(err));
  },


  downvoteEvent: function(req, res) {
    let userId = req.body.userId;
    db.User.findOneAndUpdate({ _id: userId }, {$pull: { userLikes: req.body.eventId }}, {new: true})
    .then(user => {
      db.Event.findById({ _id: req.body.eventId })
      .then(event => event.downvoted(userId, function(){
        res.json({
          event: event,
          user: user.sanitize()
        })
      }))
    })
  },


  unvoteEvent: function(req, res) {
    let userId = req.body.userId;
    db.User.findOneAndUpdate({ _id: userId }, {$pull: { userLikes: req.body.eventId }}, {new: true})
    .then(user => {
      db.Event.findById({ _id: req.body.eventId })
      .then(event => event.unvoted(userId, function(){
        res.json({
          user: user.sanitize(),
          event: event
        })
      }))
    })
  },

  attendEvent: function(req, res) {
    db.Event.findOne({_id: req.body.eventId})
    .then(event => {
      event.attending(req.body.userId, function() {
        db.User.findOne({ _id: req.body.userId })
          .then(user => {
            user.attending(req.body.eventId, function() {
              res.json({
                user: user.sanitize(),
                event: event
              })
          })}
        )
      })
    })
    .catch(err => console.log(err))
  },

  searchEvent: function(req, res) {
    db.Event
      .find(
        { $text: { $search: req.body.searchTerms } },
        { score: { $meta: "textScore" } } )
      .where('genre').equals(req.body.searchGenre)
      .sort( { score: { $meta: "textScore" } } )
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
