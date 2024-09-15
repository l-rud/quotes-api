const { Router } = require('express');
const { getAll } = require('../controllers/quotes.js');

const router = Router();



router.get('/', getAll);

module.exports = router;
