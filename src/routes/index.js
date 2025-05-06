const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

// Rota de login
router.post('/login', authController.login);

// Rota pública
router.get('/users', userController.getUsers);

// Rota protegida
router.get('/projects', authenticateToken, projectController.getProjects);

module.exports = router;
