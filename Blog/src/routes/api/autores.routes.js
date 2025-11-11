const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

router.get('/', AutoresController.getAll);
router.post('/', AutoresController.create);

module.exports = router;
