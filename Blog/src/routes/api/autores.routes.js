const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');
const AutoresMiddleware = require('../../middlewares/autores.middleware');

router.get('/', AutoresController.getAll);
router.get('/:autorId',AutoresMiddleware.checkAutoresId, AutoresController.getById);
router.get('/:autorId/posts',AutoresMiddleware.checkAutoresId, AutoresController.getAutorPostsById);

router.post('/', AutoresController.create);

module.exports = router;
