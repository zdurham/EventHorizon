const db = require("../models");

module.exports = {
  createEvent: function(req, res) {
    db.UserEvent
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
