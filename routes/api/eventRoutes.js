const router = require("express").Router();
const eventController = require("../../controllers/event");

router.route("/")
  .post(eventController.createEvent)
  .get(eventController.findAll);

router.route("/:id")
  .post(eventController.remove)
  .get(eventController.getSingleEvent);

router.route("/find/:id")
  .get(eventController.findAllByUser);

module.exports = router;
