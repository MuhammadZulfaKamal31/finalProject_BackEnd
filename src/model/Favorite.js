const db = require('../config/Database')
const User = require('./User')
const { Sequelize } = require('sequelize')

const { DataTypes } = Sequelize

const Favorite = db.define('favorite', {
    media_type: {
        type: DataTypes.STRING,
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
    poster_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
})

User.hasMany(Favorite, { foreignKey: 'userId' })
Favorite.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })

module.exports = Favorite