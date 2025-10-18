const express = require('express');
const router = express.Router();

// Importa o controlador de livros
const { livroController } = require('../controllers/livroController');

// Rota para cadastrar um novo livro (POST /livros)
router.post('/livros', livroController.cadastrarLivro);

// Rota para listar livros (GET /livros ou GET /livros?titulo=...)
router.get('/livros', livroController.listarLivros);

// Exporta o roteador para ser usado no app.js
module.exports = {
    livroRoutes: router
};