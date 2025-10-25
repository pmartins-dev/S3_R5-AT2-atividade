# Documentação da API - Sistema de Livros

## Livros
### GET /livros
- **Descrição**: Obtém uma lista de livros. Permite buscar todos os livros ou filtrar por título.
- **Parâmetros Query (opcional)**:
- titulo (string): Filtra livros por título (busca parcial)

- **Response (200)**: Array de Livros

#### Exemplo de Response:
**json**
```
[
  {
    "idLivro": "uuid-do-livro",
    "titulo": "Dom Casmurro",
    "anoPublicacao": 1899,
    "qtdExemplares": 5,
    "idAutor": "uuid-do-autor"
  }
]
```

### POST /livros
- **Descrição**: Cria um novo livro no sistema
- **Body (obrigatório)**:

#### Exemplo de criação de um novo livro:
**json**
```
{
  "titulo": "Nome do Livro",
  "anoPublicacao": 2024,
  "qtdExemplares": 10,
  "idAutor": "uuid-do-autor"
}
```

- **Response (201)**:
**json**
```
{
  "message": "Livro cadastrado com sucesso!"
}
```
- **Error Response (400)**:
**json**
```
{
  "erro": "O campo título e idAutor é obrigatório."
}
```

### Estrutura de Dados
**Objeto Livro**
```
typescript
{
  idLivro: string,          // UUID do livro
  titulo: string,           // Título do livro
  anoPublicacao: number,    // Ano de publicação do livro
  qtdExemplares: number,    // Quantidade de exemplares do livro
  idAutor: string          // UUID do autor
}
```
### Exemplos de Uso
Buscar todos os livros
text
GET /livros
Buscar livros por título
text
GET /livros?titulo=dom
Cadastrar novo livro
text
POST /livros
Content-Type: application/json

{
  "titulo": "Memórias Póstumas de Brás Cubas",
  "anoPublicacao": 1881,
  "qtdExemplares": 8,
  "idAutor": "123e4567-e89b-12d3-a456-426614174000"
}
Observações
Todos os UUIDs devem estar no formato válido

O campo titulo é obrigatório no cadastro

O campo idAutor é obrigatório no cadastro e deve referenciar um autor existente

A busca por título utiliza busca parcial (LIKE %titulo%)

Campos numéricos (anoPublicacao, qtdExemplares) devem ser inteiros