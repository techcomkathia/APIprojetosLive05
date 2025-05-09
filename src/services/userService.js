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
// primeiro fazer verificações de campos vazios
// depois a verificação se o username existe no banco de dados retorna um objeto com a mensagem 'Usuário ja cadastrado'
// o username não pode ser duplicado e o email deve ser unico
// se as duas senhas não forem iguais, retorna um objeto com a mensagem 'As senhas devem ser iguais'

module.exports = {
  getAllUsers,
  getUserByUserName
};
