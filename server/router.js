const router = require('express').Router();
const controller = require('./controller/index');
router.post('/search', controller.search);
module.exports = router;