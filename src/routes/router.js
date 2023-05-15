const express = require('express');
const { addFavorite, unFavorite } = require('../controllers/FavoriteController')
const { getUsers, register, Login } = require('../controllers/UserController')

const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { refreshToken } = require('../controllers/RefreshToken.js')

const router = express.Router();


router.post('/register', register);
router.post('/login', Login)


router.post('/addfavorite', verifyToken, addFavorite)


module.exports = router;
