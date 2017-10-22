const router = require("express").Router();
const eventController = require("../../controllers/event");

router.route("/")
  .get(eventController.findAll);

router.route("/createEvent/:id")
  .post(eventController.createEvent);

router.route("/:id")
  .post(eventController.remove)
  .get(eventController.getSingleEvent);

router.route("/find/:id")
  .get(eventController.findAllByUser);

router.route("/upvote/:id")
  .post(eventController.upvoteEvent);

router.route("/downvote/:id")
  .post(eventController.downvoteEvent);

module.exports = router;
