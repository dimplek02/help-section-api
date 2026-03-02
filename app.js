const express = require("express");
require("./config/db");

const app = express();

app.use(express.json());

const helpRoutes = require("./routes/help.routes");
app.use("/api/help", helpRoutes);

module.exports = app;