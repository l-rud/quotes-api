const { Router } = require('express');

const { getAll, getRandom } = require('../controllers/quotes.js');

const router = Router();

router.get('/', getAll);

router.get('/random', getRandom);

module.exports = router;
