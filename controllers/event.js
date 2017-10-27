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
                res.send(newdoc);
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
                res.send(newdoc);
              }
            });
            }
          });
        }
      })


  },
  remove: function(req, res) {
    console.log(req.body.eventId)
    db.Event
      .remove({ _id: req.body.eventId })
      .exec((err, data) => {
        if (err) {
          console.log(err)
        }
        else {
          res.json(data)
        }
      })
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Event
      .find()
      .where('date').gt(Date.now())
      .populate('createdBy', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByUser: function(req, res) {
    // checking if user is advertiser
    const userId = req.params.userId
    console.log(userId)
    db.User
      .findById({ _id: req.params.userId })
      .then(function(dbModel) {
        if(dbModel.isAdvertiser) {
          db.Event
            .find(req.query)
            .where('createdBy').equals(req.params.id)
            .populate('attendingList', '-_id -__v -email -password')
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else {
          db.Event
            .find(req.query)
            .where('createdBy').equals(userId)
            .populate('attendingList', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },

  getSingleEvent: function(req, res) {
    db.User
      .findById({ _id: req.body.userId })
      .then(function(dbModel) {
        if(dbModel.isAdvertiser) {
          db.Event
            .findById({ _id: req.body.eventId })
            .populate('attendingList', '-_id -__v -email -password')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else {
          db.Event
            .findById({ _id: req.body.eventId })
            .populate('attendingList', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },


  upvoteEvent: function(req, res) {
    var userId = req.body.userId;
    db.Event.findById({ _id: req.body.eventId })
    .then(dbModel => dbModel.upvoted(userId, function(){
      res.json(dbModel);
    }))
    .catch(err => res.status(422).json(err));
  },


  downvoteEvent: function(req, res) {
    var userId = req.body.userId;
    db.Event.findById({_id: req.body.eventId})
    .then(dbModel => dbModel.downvoted(userId, function(){
      res.json(dbModel);
    }))
    .catch(err => res.status(422).json(err));
  },


  unvoteEvent: function(req, res) {
    let userId = req.body.userId;
    db.Event.findOne({ _id: req.body.eventId })
    .then(dbModel => {
      dbModel.unvoted(userId, function() {
      res.json(dbModel);
    })})
    .catch(err => {
      res.status(422).json(err)
    })
  },


  attendEvent: function(req, res) {
    var userId = req.params.id;
    var eventId = req.body._id;
    db.Event.findById(eventId)
    .then(dbModel => dbModel.attending(userId, function(){
      db.User.findById(userId)
      .then(dbModel => dbModel.attending(eventId, function() {
        res.json(dbModel);
      }))
    }))
    .catch(err => res.status(422).json(err));
  }
};
