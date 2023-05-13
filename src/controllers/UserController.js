
const User = require('../model/User.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//GET
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username', 'email', 'password']
        })
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

//POST
exports.register = async (req, res) => {
    const { username, email, password, confPassword } = req.body;
    if (password !== confPassword) { return res.status(400).json({ msg: "password and confirm password do not match" }); }
    //buat ngacak password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)

    try {
        await User.create({
            username: username,
            email: email,
            password: hashPassword
        })
        res.json({ msg: 'register success' })
    } catch (error) {
        console.log(error)
    }
}

//POST
exports.Login = async (req, res) => {

    try {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username } })
        if (!user) return res.status(404).json('Username not found')
        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(400).json('wrong password')
        const token = jwt.sign({ id: user.id, username: user.username }, 'secret')
        res.cookie('accsessToken', token).status(200).json({ id: user.id, username: user.username, avatar: user.avatar })
    } catch (error) {
        res.status(500).json(error)
    }
}
