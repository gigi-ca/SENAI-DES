DROP DATABASE loja;

CREATE DATABASE loja;

USE loja;

CREATE TABLE Clientes(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
email VARCHAR(100)
);

CREATE TABLE Pedidos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
cliente_id INTEGER,
data_pedido DATE,
status VARCHAR(10),   
FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

INSERT INTO clientes
VALUES (DEFAULT, "Giovana Corrêa", "contatocorreagiovana@gmail.com");

INSERT INTO clientes
VALUES (DEFAULT, "Pietra Lopes", "loppietra@hotmail.com");

INSERT INTO clientes
VALUES (DEFAULT, "Julia Novo", "novo.julia@gmail.com");

INSERT INTO pedidos
VALUES (DEFAULT, "2", "2024-10-20", "cancelado");

INSERT INTO pedidos
VALUES (DEFAULT, "1", "2025-04-09", "atrasado");

INSERT INTO pedidos
VALUES (DEFAULT, "3", "2023-07-16", "entregue");

UPDATE clientes
SET email = "lopespietra@gmail.com"
WHERE id = 2;

DELETE FROM pedidos
WHERE id = 1;