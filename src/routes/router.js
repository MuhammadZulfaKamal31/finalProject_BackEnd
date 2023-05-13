const express = require('express');
const { getUsers, register, Login } = require('../controllers/UserController')
const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { refreshToken } = require('../controllers/RefreshToken.js')

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/users', register);
router.post('/login', Login)
router.get('/token', refreshToken)

module.exports = router;
