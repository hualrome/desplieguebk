const mongoose = require('mongoose');
//variable que controla las variantes de la base de datos
const empleadoModel = new mongoose.Schema(
    {
        name:{type: String,},
        position:{type: String,},
        office:{type: String,},
        salario:{type: Number,},
    },
    {
        timestamps: true,
        versionKey:  false,
    }
)
const ModelEmpleado = mongoose.model("empleados", empleadoModel);
// exportamos el modelo para poder usarlo en otros archivos
module.exports = ModelEmpleado;
