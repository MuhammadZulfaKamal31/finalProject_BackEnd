const Favorite = require('../model/Favorite');

exports.addFavorite = async (req, res) => {
    const { mediaType, mediaId, posterPath, title, vote } = req.body;
    const findFavorite = await Favorite.findOne({ where: { userId: req.userId, media_id: mediaId, media_type: mediaType } });
    if (findFavorite) return res.status(400).json('you already add favorite');
    try {
        await Favorite.create({
            media_type: mediaType,
            media_id: mediaId,
            poster_path: posterPath,
            title: title,
            vote: vote,
            userId: req.userId
        })
        res.status(200).json('favorite post successfuly')
    }
    catch (error) {
        res.status(500).json(error)
    }
}

exports.unFavorite = async (req, res) => {
    const mediaId = req.params.id;
    const mediaType = req.params.type;
    const userId = req.userId;
    try {
        const favorite = await Favorite.findOne({ where: { media_id: mediaId, media_type: mediaType, userId: userId } });
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }
        await favorite.destroy();
        return res.status(200).json({ message: 'Favorite deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

exports.getSingleFavorite = async (req, res) => {
    const mediaId = req.query.mediaId;
    const mediaType = req.query.mediaType;
    const userId = req.userId;
    try {
        const favorite = await Favorite.findOne({
            where: {
                media_id: mediaId,
                media_type: mediaType,
                userId: userId
            }
        });
        return res.status(200).json(favorite);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


exports.getAllFavorite = async (req, res) => {
    const userId = req.userId;
    try {
        const favorite = await Favorite.findAll({
            where: {
                userId: userId
            }
        });
        return res.status(200).json(favorite);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

