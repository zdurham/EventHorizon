const router = require("express").Router();
const scraperRoutes = require("./scraper");

// Scraper routes
router.use("/scraper", scraperRoutes);

module.exports = router;
