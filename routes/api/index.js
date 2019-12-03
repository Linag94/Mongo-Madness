var router = require("express").Router();
var clearRoutes = require("./clear");
var dataRoutes = require("./data");
var grabRoutes = require("./grab");
var noteRoutes = require("./note");

router.use("/clear", clearRoutes);
router.use("/data", dataRoutes);
router.use("/grab", grabRoutes);
router.use("/note", noteRoutes);

module.exports = router;
