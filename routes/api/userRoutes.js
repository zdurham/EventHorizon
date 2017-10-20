const router = require("express").Router();
const userController = require("../../controllers/user");

router.route("/:id")
  .get(userController.getUserEvents);

module.exports = router;
