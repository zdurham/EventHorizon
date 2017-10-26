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
    db.Event
      .findById({ _id: req.params.eventId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .where('date').gt(Date.now())
      .populate('createdBy', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByUser: function(req, res) {
    //checking if user is advertiser
    db.User
      .findById({ _id: req.params.id })
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
            .where('createdBy').equals(req.params.id)
            .populate('attendingList', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },
  getSingleEvent: function(req, res) {
    db.User
      .findById({ _id: req.params.userId })
      .then(function(dbModel) {
        if(dbModel.isAdvertiser) {
          db.Event
            .findById({ _id: req.params.eventId })
            .populate('attendingList', '-_id -__v -email -password')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else {
          db.Event
            .findById({ _id: req.params.eventId })
            .populate('attendingList', '-_id -__v -email -password -isAdvertiser -profile -age -sex -createdEvents')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        }
      })
  },
  upvoteEvent: function(req, res) {
    var userId = req.params.id;
    db.Event.findById(req.body._id)
    .then(dbModel => dbModel.upvoted(userId, function(){
      res.json(dbModel);
    }))
    .catch(err => res.status(422).json(err));
  },
  downvoteEvent: function(req, res) {
    var userId = req.params.id;
    db.Event.findById(req.body._id)
    .then(dbModel => dbModel.downvoted(userId, function(){
      res.json(dbModel);
    }))
    .catch(err => res.status(422).json(err));
  },
  attendEvent: function(req, res) {
    var userId = req.params.id;
    db.Event.findById(req.body._id)
    .then(dbModel => dbModel.attending(userId, function(){
      res.json(dbModel);
    }))
    .catch(err => res.status(422).json(err));
  }
};
