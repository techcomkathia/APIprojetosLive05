const User = require('../models/user');

const getAllUsers = async () => {
  return await User.findAll({
    attributes: ['name', 'email']
  });
};

const getUserByUserName = async (userName) => {
  return await User.findOne({ where: { userName } });
};

// postUser - cadastra um novo usuário, recebe um objeto com as chaves name, userName, password, confirmePassword, email e caso as duas senhas sejam iguais, cria o hash da senha e armazena no banco de dados

module.exports = {
  getAllUsers,
  getUserByUserName
};
