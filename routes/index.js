var router = require('express').Router();
var apiRoutes = require('./apiRoutes');
var htmlRoutes = require('./htmlRoutes');

router.use('/api', apiRoutes);
router.use(htmlRoutes);

module.exports = router;