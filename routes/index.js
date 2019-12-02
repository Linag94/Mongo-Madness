var router = require('express').Router();
var apiRoutes = require('api/apiRoutes');
var htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use("/", viewsRoutes);

module.exports = router;