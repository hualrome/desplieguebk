const ModelUser = require ('../models/model');

const usuarioCtrl = {};



//Creación nuevo usuario (POST)
usuarioCtrl.createUser = async(req, res)=> {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
}

// Consultar todos los usuarios (GET)
usuarioCtrl.getUsers = async (req, res)=>{
    const respuesta = await ModelUser.find({}) //obtener todos los usuarios de la bae de datos
    res.send(respuesta)
}

//consultar un usuario por id (GET)
usuarioCtrl.getUniqueUser = async (req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id:id})
    res.send(respuesta) //envia los datos del ususario correspondienteal id solicitado
}

//Actualizar usuarios por Id (PUT)
usuarioCtrl.editUser = async (req, res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndUpdate({_id:id}, body);
    res.send(respuesta); //envia los datos del usuario actualizado
}

 //Eliminar un usuario por Id (DELETE)
 usuarioCtrl.deleteUser = async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id});
    res.send(respuesta);
 }

 module.exports =usuarioCtrl;