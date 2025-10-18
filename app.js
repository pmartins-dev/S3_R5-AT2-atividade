const express = require('express');
const app = express();
const PORT = 8080;
const { livroRoutes } = require('./src/routes/livroRoutes');

// Middleware para o Express entender requisições com corpo em JSON
app.use(express.json());

// Diz para a aplicação usar as rotas definidas no arquivo livroRoutes
// Todas as rotas definidas lá começarão com '/' (raiz)
app.use('/', livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});