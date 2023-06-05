const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })

const db = new Sequelize("crud_db", 'postgres', 'Agustus@31', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = db;
