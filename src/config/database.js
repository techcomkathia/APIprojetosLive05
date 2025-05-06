const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projetosLive06', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;