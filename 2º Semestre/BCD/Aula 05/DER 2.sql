CREATE DATABASE oficina;

USE oficina;

CREATE TABLE clientes(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
cpf VARCHAR(11)
);

CREATE TABLE veiculos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
modelo VARCHAR(100),
placa VARCHAR(7),
categoria VARCHAR(100)
);

CREATE TABLE contratos(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
cliente_id INTEGER,
veiculo_id INTEGER,
data_inicio DATE,
data_fim DATE,
valor DECIMAL(10,2),
FOREIGN KEY (cliente_id) REFERENCES clientes(id),
FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
);

CREATE TABLE manutencoes(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
veiculo_id INTEGER,
tipo VARCHAR(100),
data DATE,
observacao VARCHAR(200),
FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
);

INSERT INTO clientes
VALUES (DEFAULT, "Pietra Lopes", "158726039-14");

INSERT INTO clientes
VALUES (DEFAULT, "Julia Novo", "948206751-45");

INSERT INTO veiculos
VALUES (DEFAULT, "Fiat PULSE DRIVE 1.3 MT FLEX 4P 2026", "1958FHO", "SUV crossover compacto");

INSERT INTO veiculos
VALUES (DEFAULT, "Honda HR-V 2025", "C8L426I", "SUV compacto");

INSERT INTO contratos
VALUES (DEFAULT, "1", "2", "2025-05-24", "2026-08-24", "550.000");

INSERT INTO contratos
VALUES (DEFAULT, "2", "1", "2026-08-24", "2024-04-17", "400.000");

INSERT INTO manutencoes
VALUES (DEFAULT, "1", "SUV", "2025-07-26", "Trocar vidros e pneus");

INSERT INTO manutencoes
VALUES (DEFAULT, "2", "SUV", "2024-03-11", "Trocar ar condicionado e ver freio de mão");