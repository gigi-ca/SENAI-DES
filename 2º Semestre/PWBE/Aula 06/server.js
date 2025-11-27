const express = require("express");
const cors = require("cors");

const ReservasRoutes = require("./src/routes/reservas.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(ReservasRoutes);

app.listen(1000, () => {
    console.log("Servidor online na porta 1000");
});