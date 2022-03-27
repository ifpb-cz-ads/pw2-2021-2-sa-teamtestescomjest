const express = require("express");
const cors = require("cors");

const db = require("./database/config");
const app = express();

// Rotas
const productsRoutes = require("./routes/products.routes");

// Sincronizando base de dados
db.sync();

// Configurando servidor
app.use(express.json());
app.use(cors("*"));

// Configurando rotas
app.use("/products", productsRoutes);

module.exports = app;
