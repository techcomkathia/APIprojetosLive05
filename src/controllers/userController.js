const userService = require('../services/userService');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
};

async function postUser(req, res) {

  const { name, userName, password, confirmPassword, email } = req.body;

  try {

    const response = await userService.postUser({ name, userName, password, confirmPassword, email });
    if(response.user){
     return res.status(201).json(response);
    }
     return res.status(400).json(response)

  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
}

// criar um método postUser, que recebe um objeto com as chaves name, userName, password, confirmePassword, email e caso as duas senhas sejam iguais executa o service postUser e retorna um status 201 com o novo usuário criado
//caso as senhas sejam diferentes, retorna um status 400 com a mensagem 'As senhas devem ser iguais'
//caso algum campo seja vazio, retorna um status 400 com a mensagem 'Todos os campos devem ser preenchidos'

module.exports = { getUsers, postUser };
