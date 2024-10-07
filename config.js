const mongoose = require('mongoose');
require ('dotenv').config()


const dbconnect = ()=> {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGODB_URL) 
    .then((success)=> console.log("La conexión exitosa con la base de datos")) 
    .catch ((Error)=> console.log(Error.message));
}
module.exports = dbconnect;