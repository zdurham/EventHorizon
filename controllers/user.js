const db = require("../models");

module.exports = {
  getUserEvents: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .populate("createdEvents")
      .exec(function(error, doc) {
        if (error) {
          res.send(error);
        } else {
          res.send(doc);
        }
      });
  },
  getUserAttendingEvents: function(req, res) {
    console.log(req.params)
    db.User
      .findById({ _id: req.params.id })
      .populate(
        { path: "attendingEvents",
          match: { date: { $gte: Date.now() } },
          options: { sort: { date: 1 } }
        })
      .exec(function(error, doc) {
        if (error) {
          res.send(error);
        } else {
          res.send(doc.attendingEvents);
        }
      });
  }
};
