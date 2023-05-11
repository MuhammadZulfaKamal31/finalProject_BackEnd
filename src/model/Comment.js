const db = require('../config/Database')
const User = require('./User')
const { Sequelize } = require('sequelize')

const { DataTypes } = Sequelize

const Comment = db.define('comment', {
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

User.hasMany(Comment, { foreignKey: 'userId' })
Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })

module.exports = Comment