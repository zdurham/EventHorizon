const router = require("express").Router();
const userEventController = require("../../controllers/userEventController");

router.route("/createEvent")
  .post(userEventController.createEvent);

module.exports = router;
