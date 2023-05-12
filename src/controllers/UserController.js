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
}