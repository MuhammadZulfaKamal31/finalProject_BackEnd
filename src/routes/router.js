const express = require('express');
const { register, Login, Logout } = require('../controllers/UserController')
const { addFavorite, unFavorite, getSingleFavorite, getAllFavorite } = require('../controllers/FavoriteController')
const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { postComment, getComment, deleteComment } = require('../controllers/CommentController');

const router = express.Router();

// User API
router.post('/register', register);
router.post('/login', Login)
router.post('/logout', Logout)

// Comment API
router.post('/comment', verifyToken, postComment)
router.get('/comment/:media_type/:media_id', getComment)
router.delete('/comment/:commentId', verifyToken, deleteComment)


// Favorite API
router.post('/favorite', verifyToken, addFavorite)
router.get('/favorite/:mediaId/:mediaType', verifyToken, getSingleFavorite)
router.delete('/favorite/:mediaId/:mediaType', verifyToken, unFavorite)
router.get('/favorite', verifyToken, getAllFavorite)


module.exports = router;
