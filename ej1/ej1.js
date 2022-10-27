// Levantar un servidor utilizando Express, al levantar el servidor tiene que mostrar un mensaje que diga: 
// `Servidor levantado en el puerto ${puerto}`.

const express = require("express");

const app = express();
const puerto = 3000
app.listen(puerto, () => {

console.log(`Servidor levantado en el puerto ${puerto}`);

});
