const router = require("express").Router();

// Mounting each kind of route on url paramater paths

// const authRoutes = require("./authRoutes");
const eventRoutes = require("./eventRoutes");
const userRoutes = require("./userRoutes");

// Mounting each kind of route on url paramater paths
// router.use("/auth", authRoutes);
router.use("/event", eventRoutes);
router.use('/user', userRoutes);

module.exports = router;
