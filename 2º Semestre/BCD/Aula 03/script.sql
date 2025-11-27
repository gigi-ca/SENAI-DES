USE loja;

CREATE TABLE Usuarios(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(160),
  nascimento DATE,
  endereço VARCHAR(100),
  telefone VARCHAR(11)
);

CREATE TABLE Pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    clienteId INTEGER,
    datahora DATETIME,
    nomeProduto VARCHAR(50),
    valor DECIMAL(4,3),
    FOREIGN KEY (clienteId) REFERENCES Usuarios(id)
);


INSERT INTO usuarios
VALUES (DEFAULT, "fulano da Silva", "2000-05-20", "Rua Sem Saida", "128°", "1191234756");

SELECT * FROM usuarios; //mostra a tabela inteira
SELECT nome, endereço FROM usuarios; //	Mostra apenas os nomes e os endereços


UPDATE usuarios
SET nascimento = "1990-05-25"
WHERE id = 1;


DELETE FROM usuarios
WHERE id = 2;