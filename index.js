const app = require('./app');
require('dotenv').config();
require('./database/db');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Desafio tap corriendo en port ${port}`);
})