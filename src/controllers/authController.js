const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');

const secret = 'seusegredoaqui'; // Idealmente, use variável de ambiente

const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await userService.getUserByUserName(userName);

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    const token = jwt.sign(
      { userId: user.id, userName: user.userName },
      secret,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro no login', error });
  }
};

module.exports = { login };
