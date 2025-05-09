const { Sequelize } = require('sequelize');

// utilizar o .env com as variáveis de ambiente
// process.env.MINHAVARIAVEL 
// DB_HOST, DB_USER, DB_PASS 
// DB_NAME, DB_DIALECT

const sequelize = new Sequelize('projetosLive05', 'root', 'km2015km', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;