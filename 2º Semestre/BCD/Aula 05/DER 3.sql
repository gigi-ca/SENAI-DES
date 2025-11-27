CREATE DATABASE app;

USE app;

CREATE TABLE usuarios(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
email VARCHAR(100)
);

CREATE TABLE musicas(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100),
artista VARCHAR(100),
duracao VARCHAR(20)
);

CREATE TABLE playlist(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
usuario_id INTEGER,
nome VARCHAR(160),
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE playmusica(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
ordem VARCHAR(120),
musica_id INTEGER,
playlist_id INTEGER,
FOREIGN KEY (musica_id) REFERENCES musicas(id),
FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);

INSERT INTO usuarios
VALUES (DEFAULT, "Marina da Silva", "silvamari@gmail.com");

INSERT INTO usuarios
VALUES (DEFAULT, "Cecilia Motta", "mottace@gmail.com");

INSERT INTO musicas
VALUES (DEFAULT, "Palpite", "Vanessa Rangel", "3:52");

INSERT INTO musicas
VALUES (DEFAULT, "Vou Deixar", "Shank", "4:32");

INSERT INTO playlist
VALUES (DEFAULT, "2", "verão");

INSERT INTO playlist
VALUES (DEFAULT, "1", "vibes");

INSERT INTO playmusica
VALUES (DEFAULT, "15873964", "1", "2");

INSERT INTO playmusica
VALUES (DEFAULT, "875625", "2", "1");

