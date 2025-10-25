-- Tabela Autores com ID UNIQUEIDENTIFIER
CREATE TABLE Autores (
    idAutor UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    nomeAutor VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(100),
    anoNascimento INT
);

-- Tabela Livros com ID UNIQUEIDENTIFIER
CREATE TABLE Livros (
    idLivro UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    titulo VARCHAR(200) NOT NULL,
    anoPublicacao INT,
    qtdExemplares INT NOT NULL DEFAULT 0,
    idAutor UNIQUEIDENTIFIER NOT NULL,
    FOREIGN KEY (idAutor) REFERENCES Autores(idAutor)
);

-- Tabela Clientes com ID UNIQUEIDENTIFIER
CREATE TABLE Clientes (
    idCliente UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    nomeCliente VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefone VARCHAR(20)
);

-- Tabela Emprestimos com ID UNIQUEIDENTIFIER
CREATE TABLE Emprestimos (
    idEmprestimo UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    dataEmprestimo DATE NOT NULL DEFAULT GETDATE(),
    dataDevolucao DATE,
    idLivro UNIQUEIDENTIFIER NOT NULL,
    idCliente UNIQUEIDENTIFIER NOT NULL,
    FOREIGN KEY (idLivro) REFERENCES Livros(idLivro),
    FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente)
);
