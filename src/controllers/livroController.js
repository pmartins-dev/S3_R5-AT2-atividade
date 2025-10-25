//livroController.js

// Importa o modelo de livro
const { livroModel } = require('../models/livroModels');

/**
 * @typedef {Object} Livro
 * @property {string} idLivro - UUID do livro.
 * @property {string} titulo - Título do livro.
 * @property {int} anoPublicacao - Ano de publicação do livro.
 * @property {int} qtdExemplares - Quantidade de exemplares do livro.
 * @property {string} idAutor - UUID do autor. 
 */

const livroController = {
    
    /*Função para cadastrar um livro
        -----------------------
        CRIAR UM NOVO LIVRO
        POST /livros
        BODY:
        {
            "titulo": "nome",
            "anoPublicacao": 0000,
            "qtdExemplares": 000,
            "idAutor": UUID
        }
        -----------------------
    */
    cadastrarLivro: async (req, res) => {
        try {
            // 1. Pegar os dados do livro do corpo da requisição (req.body)
            const { titulo, anoPublicacao, qtdExemplares, idAutor } = req.body;

            // 2. Fazer validações (ex: verificar se o título foi enviado)
            if (!titulo || !idAutor) {
                return res.status(400).json({ erro: 'O campo título e idAutor é obrigatório.' });
            }

            // 3. Chamar a função do model para inserir o livro no banco (await = Espera)
            await livroModel.cadastrarLivro(titulo, anoPublicacao, qtdExemplares, idAutor);

            res.status(201).json({ message: 'Livro cadastrado com sucesso!' });

        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            res.status(500).json({ erro: 'Erro interno no servidor.' });
        }
    },

    /**  
    * Função para listar os livros
    * @param {string} titulo O título do livro
    * @returns {Livro} Livro pesquisado conforme o titulo
    */
    listarLivros: async (req, res) => {
        try {
            // 1 No caso de fitrar por um (titulo) que foi passado como query param na URL
            const { titulo } = req.query;
            let livros;

            if (titulo) {
                // 2. Se houver um título, chama a função de busca por título do model
                livros = await livroModel.buscarPorTitulo(titulo);

                return res.status(200).json(livros);
            }
            // 3. Se não colocar um titulo, chama a função que lista todos os livros

            livros = await livroModel.listarTodos();


            // 4. Retorna a lista de livros encontrada
            res.status(200).json(livros);

        } catch (error) {
            console.error('Erro ao listar livros:', error);
            res.status(500).json({ erro: 'Erro interno no servidor.' });
        }
    }
};

module.exports = {
    livroController
};