const router = require('express').Router();

const PostController = require('../../controllers/posts.controller');
const PostMiddleware = require('../../middlewares/posts.middleware');

router.get('/', PostController.getAll);
router.get('/:postId', PostMiddleware.checkPostId, PostController.getById);

router.post('/',PostMiddleware.checkPostAutorId, PostController.create);

module.exports = router;
