const express = require('express');
const app = express();

//middlewares
app.use(express.json());

// routes
app.use("/", require('./routes/game'));

module.exports = app;