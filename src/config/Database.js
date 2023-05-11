const { Sequelize } = require("sequelize");

const db = new Sequelize('nama-database-kalian', 'username-kalian', 'password-kalian', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;