const db = require("../models");

module.exports = {
  createEvent: function(req, res) {
    let newEvent = new db.Event(req.body);
    //saving event to mongoose
    newEvent.save(function(error, doc) {
      //sending errors
      if (error) {
        res.send(error);
      } else {
      // Find our user and push the new Event id into the User's Events array
      db.User.findOneAndUpdate({}, { $push: { "createdEvents": doc._id } }, { new: true }, function(err, newdoc) {
        if (err) {
          res.send(err);
        } else {
          res.send(newdoc);
        }
      });
      }
    });
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByUser: function(req, res) {
    db.Event
      .find(req.query)
      .where('createdBy').equals(req.params.id)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getSingleEvent: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
