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

}