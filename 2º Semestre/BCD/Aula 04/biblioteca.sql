CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE usuarios(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(100),
nascimento DATE
);

CREATE TABLE livros(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100),
autor VARCHAR(100),
publicacao VARCHAR(4)
);

CREATE TABLE emprestimos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
usuario_id INTEGER,
livro_id INTEGER,
data emprestimo DATE,
data devolução DATE,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (livro_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios
VALUES (DEFAULT, "Giovana Correa", "contatocorreagiovana@gmai.com", "2009-01-20");

INSERT INTO usuarios
VALUES (DEFAULT, "Pietra Lopes", "pietra.lopes@portalsesisp.org.br", "2009-05-07");

INSERT INTO usuarios
VALUES (DEFAULT, "Julia Novo", "novo-julia@icloud.com", "2009-01-09");

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE id = 2;

INSERT INTO livros
VALUES (DEFAULT, "Uma Familia Feliz", "Raphael Montes", "2024");

INSERT INTO livros
VALUES (DEFAULT, "O Amor não é Obvio", "Elayne Baeta", "2019");

INSERT INTO livros
VALUES (DEFAULT, "Jantar Secreto", "Raphael Montes", "2016");

SELECT * FROM livros;

SELECT titulo, publicacao FROM livros WHERE id = 3;

INSERT INTO emprestimos
VALUES (DEFAULT, "1", "1", "2025-05-20", "2025-06-20");

INSERT INTO emprestimos
VALUES (DEFAULT, "2", "3", "2024-11-04", "2024-12-04");

SELECT * FROM emprestimos;

SELECT usuario_id, data_emprestimo FROM emprestimos;

UPDATE emprestimos
SET data_devolução = "2025-06-30"
WHERE id = 1;

SELECT data_devolução FROM emprestimos WHERE id = 1;

DELETE FROM usuarios
WHERE id = 3;

SELECT * FROM usuarios;

SELECT * FROM `usuarios` WHERE id = 3