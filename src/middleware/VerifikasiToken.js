const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
    const token = req.cookies.accsessToken

    if (!token) return res.status(401).json("you are not authenticated")

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("Token not valid")
        req.userId = userInfo.id
        req.username = userInfo.username
        next()
    })
}