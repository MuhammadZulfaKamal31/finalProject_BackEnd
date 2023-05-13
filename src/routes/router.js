const express = require('express');
const { getUsers, register, Login } = require('../controllers/UserController')
<<<<<<< HEAD
const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { refreshToken } = require('../controllers/RefreshToken.js')

const router = express.Router();

router.get('/users', verifyToken, getUsers)
=======

const router = express.Router();

router.get('/users', getUsers)
>>>>>>> 226aef06dc9b20e18679fbbf58affa18c55f2d0e
router.post('/users', register);
router.post('/login', Login)
router.get('/token', refreshToken)

module.exports = router;
