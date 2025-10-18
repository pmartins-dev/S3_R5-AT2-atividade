// Importa a função de conexão com o banco
const { sql, getConnection } = require('../config/db');

const livroModel = {

    // Função que cadastra um livro no banco de dados
    cadastrarLivro: async (titulo, anoPublicacao, qtdExemplares, idAutor) => {

        /*
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

        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Livros (titulo, anoPublicacao, qtdExemplares, idAutor) VALUES (@titulo, @anoPublicacao, @qtdExemplares, @idAutor)';

            await pool.request()
                .input('titulo', sql.VarChar(200), titulo)
                .input('anoPublicacao', sql.Int, anoPublicacao)
                .input('qtdExemplares', sql.Int, qtdExemplares)
                .input('idAutor', sql.UniqueIdentifier, idAutor)
                .query(querySQL);
        } catch (error) {
            console.error("Erro ao cadastrar livro:", error);
            throw error;
        }
    },

    // Função que retorna todos os livros do banco
    listarTodos: async () => {
        try {
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Livros";

            const result = await pool.request().query(querySQL);
            return result.recordset;
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            throw error;
        }
    },

    // Função que busca livros por um título específico
    buscarPorTitulo: async (titulo) => {
        try {

            const pool = await getConnection();

            let querySQL = "SELECT * FROM Livros WHERE titulo = @titulo";

            const result = await pool.request()
                .input('titulo', sql.VarChar(200), titulo)
                .query(querySQL);

            return result.recordset;


        } catch (error) {
            console.error("Erro ao buscar livros por titulo:", error);
            throw error;
        }

    }
};

module.exports = {
    livroModel
};