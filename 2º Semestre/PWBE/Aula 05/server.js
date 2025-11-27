const express = require("express");
const cors = require("cors");

const ProfessoresRoutes = require("./src/routes/professores.routes");
const TurmasRoutes = require("./src/routes/turmas.routes");
const DisciplinasRoutes = require("./src/routes/disciplinas.routes");
const PossuiiRoutes = require("./src/routes/possuii.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(ProfessoresRoutes);
app.use(TurmasRoutes);
app.use(DisciplinasRoutes);
app.use(PossuiiRoutes);

app.listen(2000, () => {
    console.log("Servidor online na porta 2000");
});