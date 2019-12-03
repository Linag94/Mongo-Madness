var router = require("express").Router();
var grabController = require("../../controllers/grab");

router.get("/", grabController.scrapeHeadlines);

module.exports = router;
