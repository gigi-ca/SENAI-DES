require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login.routes');
const agendamentosRoutes = require('./src/routes/agendamentos.route');
const clientesRoutes = require('./src/routes/clientes.routes');
const profissionaisRoutes = require('./src/routes/profissionais.routes');
const servicosRoutes = require('./src/routes/servicos.routes');

app.use(express.json());
app.use(cors());
app.use(loginRoutes);
app.use(agendamentosRoutes);
app.use(clientesRoutes);
app.use(profissionaisRoutes);
app.use(servicosRoutes);

app.listen(port, () => {
    console.log('Servidor online na' + port);
})