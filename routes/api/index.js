const router = require("express").Router();

const userEventRoutes = require("./eventRoutes");

// Mounting each kind of route on url paramater paths
router.use("/event", userEventRoutes);
// const authRoutes = require("./authRoutes");
const eventRoutes = require("./eventRoutes");
const userRoutes = require("./userRoutes");

// Mounting each kind of route on url paramater paths
// router.use("/auth", authRoutes);
router.use("/event", eventRoutes);
router.use('/user', userRoutes);

module.exports = router;
