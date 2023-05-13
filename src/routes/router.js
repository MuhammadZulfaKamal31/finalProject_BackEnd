const express = require('express');
const { getUsers, register, Login } = require('../controllers/UserController')
const Controller = require('../controllers/controller');

const router = express.Router();

// router.use('/', Controller.helloWorld);

router.post('/users', register);
router.post('/login', Login)

module.exports = router;
