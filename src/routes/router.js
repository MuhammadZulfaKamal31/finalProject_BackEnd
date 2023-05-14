const express = require('express');
const { getUsers, register, Login } = require('../controllers/UserController')

const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { refreshToken } = require('../controllers/RefreshToken.js')

const router = express.Router();


router.post('/register', register);
router.post('/login', Login)


module.exports = router;
