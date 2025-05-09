const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}. http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});