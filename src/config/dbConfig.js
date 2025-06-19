const { Sequelize } = require('sequelize');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// Database connection setup
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    logging: console.log,
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;