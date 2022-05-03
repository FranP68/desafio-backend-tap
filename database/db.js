const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
    .then(()=>console.log("DB conectada"))
    .catch((error)=> console.log("Falló la conexión con la DB", error));

