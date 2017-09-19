const router = require('express').Router();
const controller = require('./controller/index');
router.post('/songs', controller.search);
module.exports = router;