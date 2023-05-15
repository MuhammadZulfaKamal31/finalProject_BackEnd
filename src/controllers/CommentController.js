const Comment = require('../model/Comment')
const Users = require('../model/User')

exports.postComment = async (req, res) => {
    const { text, media_type, media_id } = req.body
    try {
        await Comment.create({
            text,
            media_id,
            media_type,
            userId: req.userId
        })
        res.status(200).json('Post create sucsessfuly')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getComment = async (req, res) => {
    const { media_type, media_id } = req.params
    try {
        const comment = await Comment.findAll({
            where: {
                media_id,
                media_type
            },
            include: [{
                model: Users,
                attributes: ['id', 'username', 'avatar']
            }]
        })
        res.status(200).json(comment)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }

}

exports.deleteComment = async (req, res) => {
    const { commentId } = req.params
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: commentId,
                userId: req.userId
            }
        })
        if (deleteComment > 0) return res.status(200).json('comment deleted')
        return res.status(400).json('you can delete only your comment')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}