CREATE DATABASE escola;

USE escola;

CREATE TABLE Professores( 
id INTEGER AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(160), 
email VARCHAR(100), 
telefone VARCHAR(11) 
);

CREATE TABLE Disciplina( 
id INTEGER AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(50), 
professor_id INTEGER, 
FOREIGN KEY (professor_id) REFERENCES Professores(id) 
);

CREATE TABLE Turmas( 
id INTEGER AUTO_INCREMENT PRIMARY KEY, 
nome VARCHAR(50), 
periodo VARCHAR(50) 
);

CREATE TABLE Possui( 
turma_id INTEGER, 
disciplina_id INTEGER, 
FOREIGN KEY (turma_id) REFERENCES Turmas(id), 
FOREIGN KEY (disciplina_id) REFERENCES Disciplina(id) 
);

INSERT INTO professores
VALUES (DEFAULT, "Giovana Correa", "contatocorreagiovana@gmail.com", "45822-3685");

INSERT INTO professores
VALUES (DEFAULT, "Monica Marchiori", "monicamarchi@gmail.com", "78526-4102");

INSERT INTO disciplina
VALUES (DEFAULT, "Matemática", "2");

INSERT INTO disciplina
VALUES (DEFAULT, "Biologia", "1");

INSERT INTO turmas
VALUES (DEFAULT, "2ºA", "Manhã");

INSERT INTO turmas
VALUES (DEFAULT, "3ºB", "Noite");

INSERT INTO possui
VALUES ("1", "5");

INSERT INTO possui
VALUES ("2", "4");
