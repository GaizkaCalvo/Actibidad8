const router = require('express').Router();

const PostController = require('../../controllers/posts.controller');

router.get('/', PostController.getAll);
router.post('/', PostController.create);

module.exports = router;
