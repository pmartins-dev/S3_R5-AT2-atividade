// Importa a biblioteca para conectar ao SQL Server.
const sql = require('mssql');

// Objeto com as configurações de acesso ao banco de dados.
const config = {
    user: 'sa',
    password: '123456789',
    server: 'localhost',
    database: 'LojaLivrosDB',
    options: {
        encrypt: false, // Mantenha como false para conexões locais sem SSL
        trustServerCertificate: true // Necessário para conexões locais
    }
};

// Função assíncrona que estabelece e retorna a conexão
async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Erro na conexão SQL Server:', error);
    }
}

// Exporta a função para que outros arquivos possam usá-la
module.exports = {
    sql,
    getConnection
};