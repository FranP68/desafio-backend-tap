const express = require('express');
const app = express();
const port = 3000;

// routes
app.use("/", require('./routes/game'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})