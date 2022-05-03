const express = require('express');
const app = express();
require('dotenv').config();
require('./database/db');
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

// routes
app.use("/", require('./routes/game'));

app.listen(port, () => {
  console.log(`Desafio tap corriendo en port ${port}`);
})