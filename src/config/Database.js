const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })

const db = new Sequelize(process.env.NAME_DB, process.env.USER_DB, 'Agustus@31', {
    host: process.env.HOST_DB,
    dialect: 'postgres',
    port: process.env.PORT_DB
});

module.exports = db;
