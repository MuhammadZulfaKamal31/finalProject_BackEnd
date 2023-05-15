const express = require('express');
const { getUsers, register, Login, Logout } = require('../controllers/UserController')

const { verifyToken } = require('../middleware/VerifikasiToken.js')
const { refreshToken } = require('../controllers/RefreshToken.js');
const { postComment, getComment, deleteComment } = require('../controllers/CommentController');

const router = express.Router();

router.get('/currentuser', verifyToken, getUsers)
router.post('/register', register);
router.post('/login', Login)
router.post('/logout', Logout)


router.post('/comment', verifyToken, postComment)
router.get('/comment/:media_type/:media_id', verifyToken, getComment)
router.delete('/comment/:commentId', verifyToken, deleteComment)

module.exports = router;
