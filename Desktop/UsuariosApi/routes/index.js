'use strict'

const express = require('express')
const usuarioCtrl = require ('../controllers/usuario')
const api = express.Router ()

api.get ('/usuario', usuarioCtrl.getUsuarios)                    // Ruta get para mostrar todos los usuarios
api.get ('/usuario/:usuarioId', usuarioCtrl.getUsuario)          // Ruta get para mostrar un solo usuario
api.post ('/usuario', usuarioCtrl.saveUsuario)                   // Ruta Post  para enviar datos al usuario
api.put ('/usuario/:usuarioId', usuarioCtrl.updateUsuario)       // Ruta Put para realizar cambios a un usuario
api.delete ('/usuario/:usuarioId', usuarioCtrl.deleteUsuario)    // Ruta delete para eliminar un usuario

module.exports = api