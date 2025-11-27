require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunosRoutes = require('./src/routes/alunos.routes');
const inscricoesRoutes = require('./src/routes/inscricoes.routes');
const oficinasRoutes = require('./src/routes/oficinas.routes');

app.use(express.json());
app.use(cors());
app.use(alunosRoutes);
app.use(inscricoesRoutes);
app.use(oficinasRoutes);

app.listen(port, () => {
    console.log('Servidor online na' + port);
})