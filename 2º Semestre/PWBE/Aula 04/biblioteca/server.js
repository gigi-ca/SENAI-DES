const express = require("express"); //Importa um modulo
const cors = require("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");
const LivrosRoutes = require("./src/routes/livros.routes");

const app = express(); //Carrega config. inicial de express

app.use(cors()); // Aplica CORS
app.use(express.json()); //Habilita a comunicação com JSON

app.use(UsuariosRoutes); //Inclui as rotas ao express
app.use(LivrosRoutes);

//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});