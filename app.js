//importar dependencias
const express = require("express");
const cors =require("cors");
const dbconnect = require("./config");

const app = express();


app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/api/usuarios',require ('./routes/usuario.routs'));
app.use('/api/empleados',require ('./routes/empleado.routs'));
app.listen(3005, ()=>{
    console.log("Servidor Iniciado en Puerto 3005")
})

dbconnect();

