const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userEventRoutes = require("./eventRoutes");

// Mounting each kind of route on url paramater paths
router.use("/auth", authRoutes);
router.use("/event", userEventRoutes);

module.exports = router;