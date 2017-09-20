const router = require('express').Router();
const controller = require('./controller/index');

router.post('/search', controller.search);
router.get('/liked', controller.fetchLikes)
router.post('/liked', controller.addLike);
router.post('/remove', controller.removeLike);

module.exports = router;