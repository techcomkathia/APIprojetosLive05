const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');

const secret = 'seusegredoaqui'; // Idealmente, use variável de ambiente (use o .env)



const login = async (req, res) => {
 // criando um token JWT
 // recebe um objeto com as chaves userName e password e executa o service getUserByUserName
 // se o usuário for encontrado, compara a senha enviada com a senha armazenada no banco de dados
 // utiliza o bcrypt para comparar as senhas (bcrypt.compare)
 // se as senhas forem iguais, retorna um token JWT e o status 200
 // se as senhas forem diferentes, retorna um status 401 com a mensagem 'Senha incorreta'
};

module.exports = { login };
