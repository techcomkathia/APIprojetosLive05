const jwt = require('jsonwebtoken');

const secret = 'seusegredoaqui'; // De preferência, use variável de ambiente

// utiliza o método verify do jsonwebtoken para verificar o token enviado no header da requisição é válido ou não
// será utilizado no middleware de rotas protegidas

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];


    if (token == null) return res.status(401).json({ message: 'Acesso negado' });
  
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.status(403).json({ message: 'Token inválido' });
      next();
    });
  
};

module.exports = authenticateToken;
