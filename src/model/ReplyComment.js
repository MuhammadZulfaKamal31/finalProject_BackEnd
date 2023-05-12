const db = require('../config/Database.js')
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
//otomatis nyari yg pk kalau misal gak di definisikan
User.hasMany(ReplyComment, { foreignKey: 'userId' })
ReplyComment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })

//one to many
//Setiap Comment memiliki banyak ReplyComment.
Comment.hasMany(ReplyComment, { foreignKey: 'commentId' })
//Setiap ReplyComment dimiliki oleh satu Comment. dan ondelete berarti user terhapus mak ikut terhapus
ReplyComment.belongsTo(Comment, { foreignKey: 'commentId', onDelete: 'CASCADE' })

module.exports = ReplyComment