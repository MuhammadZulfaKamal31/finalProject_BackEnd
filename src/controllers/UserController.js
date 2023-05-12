<<<<<<< HEAD
const User = require('../model/User.js');

//get all
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

//post data
exports.register = async (req, res) => {
    const { username, email, password, confPassword, avatar } = req.body;
    if (password !== confPassword) { return res.status(400).json({ msg: "password dan confirm password tidak cocok" }); }

    try {
        await User.create({
            username: username,
            email: email,
            avatar: avatar,
            password: password
        })
        res.json({ msg: 'register berhasil' })
    } catch (error) {
        console.log(error)
    }
}

exports.Login = async (req, res) => {

=======
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export const Login = async (req, res) => {
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
>>>>>>> 5893f3e2ec949d8a7dff78a949f67e28e41420ae
}