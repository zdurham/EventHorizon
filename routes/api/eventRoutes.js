const router = require("express").Router();
const eventController = require("../../controllers/event");
const reqLogin = require('../../middleware/reqLogin')
const passport = require('passport')

router.route("/")
  .get(eventController.findAll);

router.route("/createEvent/:id")
  .post(reqLogin, eventController.createEvent);

router.route("/find/:userId")
  .get(reqLogin, eventController.findAllByUser);

router.route("/upvote/:id")
  .post(reqLogin, eventController.upvoteEvent);

router.route("/downvote/:id")
  .post(reqLogin, eventController.downvoteEvent);

router.route("/attend/:id")
  .post(eventController.attendEvent);

router.route("/remove")
  .post(reqLogin, eventController.remove)
router.route("/singleEvent")
  .get(eventController.getSingleEvent);

module.exports = router;
