-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS projetosLive06;
USE projetosLive06;

-- Tabela users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    userName VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL DEFAULT '$2a$10$LvGI7PyNvOtu3ykBJJ2ZJeNx08OJqAh4jBEEgeektDZPO/oyFQWWy',
    email VARCHAR(45) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(45),
    date DATE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de associação users_has_projects
CREATE TABLE users_has_projects (
    users_id INT NOT NULL,
    projects_id INT NOT NULL,
    PRIMARY KEY (users_id, projects_id),
    FOREIGN KEY (users_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (projects_id) REFERENCES projects(id) ON DELETE CASCADE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inserção de 5 usuários
INSERT INTO users (name, userName, email) VALUES
('Alice Souza', 'alice_s', 'alice@example.com'),
('Bruno Lima', 'bruno_l', 'bruno@example.com'),
('Carla Mendes', 'carla_m', 'carla@example.com'),
('Diego Alves', 'diego_a', 'diego@example.com'),
('Eva Rocha', 'eva_r', 'eva@example.com');

-- Inserção de 5 projetos
INSERT INTO projects (name, description, date) VALUES
('Projeto Apollo', 'Sistema de gestão', '2025-01-15'),
('Projeto Orion', 'App de finanças', '2025-02-10'),
('Projeto Vega', 'Plataforma educacional', '2025-03-20'),
('Projeto Phoenix', 'E-commerce', '2025-04-05'),
('Projeto Atlas', 'Dashboard de BI', '2025-05-12');

-- Inserção de 3 associações de usuários a projetos
INSERT INTO users_has_projects (users_id, projects_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(3, 3),
(4, 4),
(5, 5);
