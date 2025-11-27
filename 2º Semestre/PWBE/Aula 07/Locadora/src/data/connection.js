const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "locadora"
});

module.exports = connection;

/*
host -> endereço do Banco de dados
user -> usuario do Banco de dados
passaword -> senha do usuario
database -> base de dados
*/