
const User = require('../model/User.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//POST
exports.register = async (req, res) => {
    const { username, email, password, confPassword } = req.body;
    const findUsername = await User.findOne({ where: { username: username } })
    const findEmail = await User.findOne({ where: { email: email } })
    //buat ngacak password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)

    if (findUsername && findEmail) {
        return res.status(400).json({ msg: "Email or Username already exist" });
    } else if (findUsername) {
        return res.status(400).json({ msg: "Username already exist" });
    } else if (findEmail) {
        return res.status(400).json({ msg: "Email already exist" });
    } else if (password !== confPassword) {
        return res.status(400).json({ msg: "password and confirm password do not match" });
    } else {
        try {
            await User.create({
                username: username,
                email: email,
                password: hashPassword
            })
            res.status(200).json({ msg: 'register success' })
        } catch (error) {
            res.status(500).json(error)
        }
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
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.ACCESS_TOKEN_SECRET)
        res.cookie('accsessToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 2 * 24 * 60 * 60 * 1000
        }).status(200).json({ username: user.username, id: user.id, avatar: user.avatar });
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.Logout = async (req, res) => {
    await res.clearCookie("accsessToken", {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).status(200).json("User has been logged out")
}

