'use strict'
const Usuario = require('../models/usuario')

function getUsuario (req, res) {               //parametro res= respuesta del backend  req= requerimiento del usuario
    let usuarioId = req.params.usuarioId      //se guarda en una varia usuariotID  params=parametro de la url

    Usuario.findById (usuarioId, (err,usuario) => {          //variable usuario que busque=findById
        if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if (!usuario) return res.status(404).send({message:`El usuario no existe ${err}`}) //si el usuario no existe (!usuario)

        res.status(200).send({usuario})
    })  
}

function getUsuarios (req, res) {
    Usuario.find({}, (err,usuarios) =>{    // Buscar todos los usuarios {}
        if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if (!usuarios) return res.status(404).send({message:`El usuario no existe ${err}`})

        res.send(200, {usuarios})        //200 = código  de estado correcto;  {usuarios:[]} es un array vacío tipo Json
                                        // {usuarios} = sintaxis cuando la variable a definir es igual a la clave a definir {usuarios:usuarios}
    })
}

function saveUsuario (req, res) {
    console.log('POST /api/usuario')        //usuario es el usuario.js creado
    console.log(req.body)                   //ver todo lo que se mande en el cuerpo de la petición

    let usuario = new Usuario ()             //variable usuario, se añaden los campos que se asiganaron en el archivo usuario.js que es el modelo para crear la base de datos
    usuario.nombre = req.body.nombre             //poner misma clave ejm. name  dela petición tipo post
    usuario.apellido = req.body.apellido 
    usuario.email = req.body.email
    usuario.estado = req.body.estado
    usuario.rol = req.body.rol

    usuario.save ((err, usuarioStored) => {   // usuario.save = guardar el usuario en la base de datos **Parametros a enviar al usuario: err=por si ocurre un error y el usuarioStore= es usuario guardado
        if (err) res.status(500).send ({message: `Error al salvar la base de datos: ${err}`}) //mensaje si se produce un error

        res.status(200).send ({usuario:usuarioStored})
    })

}

function updateUsuario (req, res) {
    let usuarioId = req.params.usuarioId
    let update = req.body

    Usuario.findByIdAndUpdate (usuarioId, update, (err, usuarioUpdated) => {
        if (err) res.status(500).send ({message: `Error al actualizar el usuario: ${err}`})

        res.status(200).send ({usuario:usuarioUpdated})
    } )

}

function deleteUsuario (req, res) {
    let usuarioId = req.params.usuarioId  //acceder a todos los id de los usuarios

    Usuario.findById (usuarioId, (err, usuario) => {    // findById () se usa para buscar un solo documento por su campo _id
        if (err) res.status (500).send({message: `Error al borrar el usuario: ${err}`})
        
        usuario.remove(err => {
            if (err) res.status (500).send({message: `Error al borrar el usuario: ${err}`})
            res.status(200).send({message: `El usuario ha sido eliminado` })
        })
    })   

}

module.exports ={
    getUsuario,
    getUsuarios,
    saveUsuario,
    updateUsuario,
    deleteUsuario,

}
