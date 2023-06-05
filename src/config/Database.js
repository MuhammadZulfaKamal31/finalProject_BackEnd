const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })

const db = new Sequelize("railway", 'postgres', 'ssrMUUYDmMZVG7fXdkrS', {
    host: 'containers-us-west-172.railway.app',
    dialect: 'postgres',
    port: 7502
});

module.exports = db;
