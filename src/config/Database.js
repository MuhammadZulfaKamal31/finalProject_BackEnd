const { Sequelize } = require("sequelize");

const db = new Sequelize('fabira_movie', 'root', '@murdi254313', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;