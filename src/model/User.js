const db = require('../config/Database.js')
const { Sequelize } = require('sequelize')

const { DataTypes } = Sequelize

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: 'user.png',
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})


module.exports = Users