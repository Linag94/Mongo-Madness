var router = require("express").Router();
var dataController = require("../../controllers/data");

router.get("/", dataController.findAll);
router.delete("/:id", dataController.delete);
router.put("/:id", dataController.update);

module.exports = router;
