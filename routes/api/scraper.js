const router = require("express").Router();
const scraperController = require("../../controllers/scraperController");

router.route("/")
  .get(scraperController.findAll)
  .post(scraperController.create);

router.route("/:id")
  .delete(scraperController.remove);

module.exports = router;
