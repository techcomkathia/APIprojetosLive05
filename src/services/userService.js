const User = require('../models/user');
const bcrypt = require('bcrypt');

const getAllUsers = async () => {
  return await User.findAll({
    attributes: ['name', 'email']
  });
};

const getUserByUserName = async (userName) => {
  return await User.findOne({ where: { userName } });
};


async function postUser({ name, userName, password, confirmPassword, email }) {

  // primeiro fazer verificações de campos vazios
  if (!name || !userName || !password || !confirmPassword || !email) {
    return { message: 'Todos os campos devem ser preenchidos' };
  }

  try{
        
    // depois a verificação se o username existe no banco de dados retorna um objeto com a mensagem 'Usuário ja cadastrado'
    const userExists = await User.findOne({ where: { userName } });
  
    if (userExists) {
      return { message: 'Usuário ja cadastrado' };
    }

    // o username não pode ser duplicado e o email deve ser unico
    // se as duas senhas não forem iguais, retorna um objeto com a mensagem 'As senhas devem ser iguais'
    if (password !== confirmPassword) {
      return { message: 'As senhas devem ser iguais' };
    }

    const hashPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    const newUser = await User.create({
      name: name,
      userName: userName,
      password: hashPassword,
      email: email
    });
  
    return { message: 'Usuário cadastrado com sucesso', user: {name: newUser.name, userName: newUser.userName} };

  }
  catch(error){
    console.log(error);
    return { message: 'Erro ao cadastrar usuário', error };
  }

  
}

// postUser - cadastra um novo usuário, recebe um objeto com as chaves name, userName, password, confirmePassword, email e caso as duas senhas sejam iguais, cria o hash da senha e armazena no banco de dados
// primeiro fazer verificações de campos vazios
// depois a verificação se o username existe no banco de dados retorna um objeto com a mensagem 'Usuário ja cadastrado'
// o username não pode ser duplicado e o email deve ser unico
// se as duas senhas não forem iguais, retorna um objeto com a mensagem 'As senhas devem ser iguais'

module.exports = {
  getAllUsers,
  getUserByUserName,
  postUser
};
