const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({ path: "" })

//set up deploy di railway agar bisa terhubung di database dan portnya harus sama di railway
const db = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
    host: process.env.HOST_DB,
    dialect: 'postgres',
    port: process.env.PORT_DB
});

module.exports = db;
