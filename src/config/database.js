const { Sequelize } = require('sequelize');

// utilizar o .env com as variáveis de ambiente
// process.env.MINHAVARIAVEL 
// DB_HOST, DB_USER, DB_PASS 
// DB_NAME, DB_DIALECT

const sequelize = new Sequelize('projetosLive06', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;