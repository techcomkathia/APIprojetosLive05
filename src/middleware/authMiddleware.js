const jwt = require('jsonwebtoken');

const secret = 'seusegredoaqui'; // De preferência, use variável de ambiente

// utiliza o método verify do jsonwebtoken para verificar o token enviado no header da requisição é válido ou não
// será utilizado no middleware de rotas protegidas

const authenticateToken = (req, res, next) => {
  
};

module.exports = authenticateToken;
