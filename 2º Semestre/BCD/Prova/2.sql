DROP DATABASE biblioteca;

CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE Livros(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(50),
autor VARCHAR(160),
ano VARCHAR(4)
);
CREATE TABLE Usuarios(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
email VARCHAR(100)
);

CREATE TABLE Emprestimos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
usuario_id INTEGER,
livro_id INTEGER,
data_retirada DATE,
data_devolucao DATE,
FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
FOREIGN KEY (livro_id) REFERENCES Livros(id)
);

INSERT INTO livros
VALUES (DEFAULT, "Uma Familia Feliz", "Raphael Montes", "2024");

INSERT INTO livros
VALUES (DEFAULT, "O Amor não é Obvio", "Elayne Baeta", "2019");

INSERT INTO livros
VALUES (DEFAULT, "Coisas Obvias sobre o Amor", "Elayne Baeta", "2024");

INSERT INTO usuarios
VALUES (DEFAULT, "Julia Novo", "novo.julia@gmail.com");

INSERT INTO usuarios
VALUES (DEFAULT, "Giovana Corrêa", "contatocorreagiovana@gmail.com");

INSERT INTO usuarios
VALUES (DEFAULT, "Pietra Lopes", "lopespietra@hotmail.com");

INSERT INTO emprestimos
VALUES (DEFAULT, "3", "2", "2025-09-14", "2025-10-14");

INSERT INTO emprestimos
VALUES (DEFAULT, "2", "1", "2025-11-05", "2025-12-05");

INSERT INTO emprestimos
VALUES (DEFAULT, "1", "3", "2025-08-26", "2025-09-26");

SELECT id, usuario_id, livro_id, data_retirada FROM emprestimos;

UPDATE emprestimos
SET data_devolucao = "2025-11-02"
WHERE id = 2;