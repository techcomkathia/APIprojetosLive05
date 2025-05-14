const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize('projetosLive05', 'root', 'km2015km', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize(process.env.DB_NAME, 'root', process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;