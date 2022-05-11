const { Router } = require('express');
const { authUser } = require('../controllers/auth');

const router = Router();

router.post('/', authUser);

module.exports = router;
