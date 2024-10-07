const ModelEmpleado = require ('../models/empleados');

const empleadoCtrl = {};

//Creación nuevo empleado (POST)
empleadoCtrl.createEmpleado = async(req, res)=> {
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta)
}

// Consultar todos los empleados (GET)
empleadoCtrl.getEmpleado = async (req, res)=>{
    const respuesta = await ModelEmpleado.find({}) //obtener todos los empleados de la bae de datos
    res.send(respuesta)
}

//consultar un empleado por id (GET)
empleadoCtrl.getUniqueEmpleado = async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById({_id:id})
    res.send(respuesta) //envia los datos del empleado correspondienteal id solicitado
}

//Actualizar empleado por Id (PUT)
empleadoCtrl.editEmpleado = async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta); //envia los datos del usuario actualizado
}

 //Eliminar un empleado por Id (DELETE)
 empleadoCtrl.deleteEmpleado = async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({_id:id});
    res.send(respuesta);
 }

 module.exports =empleadoCtrl;