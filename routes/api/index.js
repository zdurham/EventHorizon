const router = require("express").Router();
const userEventRoutes = require("./eventRoutes");

// Mounting each kind of route on url paramater paths
router.use("/event", userEventRoutes);

module.exports = router;