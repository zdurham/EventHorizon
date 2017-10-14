const router = require("express").Router();
const userEventController = require("../../controllers/event");

router.route("/createEvent")
  .post(userEventController.createEvent);

module.exports = router;