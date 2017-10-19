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
  }
};
