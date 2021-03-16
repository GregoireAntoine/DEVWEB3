const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const seq = require("./config/config");
seq.sequelize.sync()
    .then(() => console.log("--\nDatabase synchronized\n--"))
    .catch((error) => console.log("An error occurred while Synchronization.\n", error));

const routeProducts = require("./routes/routeProducts");

app.use("/products", routeProducts);

app.listen('3000');

module.exports = app;
