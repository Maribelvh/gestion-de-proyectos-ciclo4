'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = Schema ({
    nombre: String, 
    apellido: String, 
    email: String, 
    estado: String,
    rol: String 
})

module.exports = mongoose.model('Usuario', UsuarioSchema) //exportar modelo