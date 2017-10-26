const router = require("express").Router();
const eventController = require("../../controllers/event");
const reqLogin = require('../../middleware/reqLogin')
const passport = require('passport')

router.route("/")
  .get(eventController.findAll);

router.route("/createEvent/:id")
  .post(reqLogin, eventController.createEvent);



router.route("/find/:userId")
  .get(eventController.findAllByUser);

router.route("/upvote/:id")
  .post(reqLogin, eventController.upvoteEvent);

router.route("/downvote/:id")
  .post(reqLogin, eventController.downvoteEvent);

router.route("/attend/:id")
  .post(reqLogin, eventController.attendEvent);

router.route("/:eventId/:userId")
  .post(eventController.remove)
  .get(eventController.getSingleEvent);

module.exports = router;
