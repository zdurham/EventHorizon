const router = require("express").Router();
// const scraperRoutes = require("./scraper");
const userRoutes = require("./user");
const userEventRoutes = require("./userEvent");

// router.use("/scraper", scraperRoutes);
router.use("/user", userRoutes);
router.use("/userEvent", userEventRoutes);

module.exports = router;
