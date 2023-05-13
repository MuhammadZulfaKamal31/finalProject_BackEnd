const express = require('express');
const { getUsers, register, Login } = require('../controllers/UserController')

const router = express.Router();

router.get('/users', getUsers)
router.post('/users', register);
router.post('/login', Login)

module.exports = router;
