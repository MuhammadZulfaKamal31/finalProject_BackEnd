const db = require('../config/Database')
const User = require('./User')
const Comment = require('./Comment')
const { Sequelize } = require('sequelize')

const { DataTypes } = Sequelize

const ReplyComment = db.define('reply_comment', {
    text: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    media_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    media_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    freezeTableName: true
})

User.hasMany(ReplyComment, { foreignKey: 'userId' })
ReplyComment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })
Comment.hasMany(ReplyComment, { foreignKey: 'commentId' })
ReplyComment.belongsTo(Comment, { foreignKey: 'commentId', onDelete: 'CASCADE' })

module.exports = ReplyComment