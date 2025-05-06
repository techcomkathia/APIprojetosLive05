# 🗂 Projeto API de Usuários e Projetos (Node.js + Sequelize + JWT)

Esta é uma API RESTful construída com **Node.js**, **Express**, **Sequelize** e **MySQL**, que implementa um sistema de gerenciamento de usuários e projetos, com relacionamento N:N e autenticação via **JWT**.

---

## ✅ Funcionalidades

- 📦 CRUD de usuários e projetos (parcialmente implementado)
- 🔐 Autenticação via JWT
- 🔄 Relacionamento N:N entre usuários e projetos
- 🔒 Rota protegida com token

---

## 🧱 Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JSON Web Token (JWT)
- Bcrypt (hash de senha)

---

## 📁 Estrutura de diretórios

```
project-root/
├── src/
│   ├── config/          # Configuração do Sequelize
│   ├── controllers/     # Lógica das rotas
│   ├── middleware/      # Autenticação JWT
│   ├── models/          # Modelos Sequelize (User, Project, UserProject)
│   ├── routes/          # Arquivo de rotas
│   ├── services/        # Regras de negócio
│   └── app.js           # App Express
├── package.json
└── README.md
```

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados

Certifique-se de ter um banco MySQL rodando. Crie um banco com o nome:

```
projetosLive06
```

Altere a conexão, se necessário, em `src/config/database.js`:
```js
const sequelize = new Sequelize('projetosLive06', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
```

### 4. Rode as migrations/tabelas (opcional, se usar Sequelize CLI)

Ou crie as tabelas diretamente com este SQL:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  userName VARCHAR(45) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  email VARCHAR(45) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  description VARCHAR(45),
  date DATE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users_has_projects (
  users_id INT NOT NULL,
  projects_id INT NOT NULL,
  PRIMARY KEY (users_id, projects_id),
  FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (projects_id) REFERENCES projects(id) ON DELETE CASCADE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 5. Inicie o servidor
```bash
node src/app.js
```

Servidor rodando em: `http://localhost:3000`

---

## 🔐 Autenticação

### Rota para login e obtenção do token:
```
POST /login
```

#### Body:
```json
{
  "userName": "admin",
  "password": "senha123"
}
```

#### Exemplo de resposta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
```

Use este token nos headers das requisições protegidas:
```
Authorization: Bearer <seu_token>
```

---

## 📚 Endpoints disponíveis

| Método | Rota         | Descrição                      | Protegida |
|--------|--------------|-------------------------------|-----------|
| GET    | `/users`     | Lista usuários (name, email)  | ❌        |
| GET    | `/projects`  | Lista projetos                 | ✅        |
| POST   | `/login`     | Gera token JWT                 | ❌        |

---

## 🧪 Teste rápido com usuário padrão

Você pode inserir um usuário com senha hash manualmente no banco:

```sql
INSERT INTO users (name, userName, password, email)
VALUES ('Admin', 'admin', '$2a$10$LvGI7PyNvOtu3ykBJJ2ZJeNx08OJqAh4jBEEgeektDZPO/oyFQWWy', 'admin@email.com');
```

Senha: `senha123`

---

## 📌 To-Do Futuro

- CRUD completo para usuários e projetos
- Associação entre usuários e projetos
- Cadastro com `bcrypt.hash`

