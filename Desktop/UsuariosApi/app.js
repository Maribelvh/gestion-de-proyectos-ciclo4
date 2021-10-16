'use strict'

const express = require('express')
const bodyParser = require ('body-parser')  //permite parsear el cuerpo del mensaje y tratarlo como un objeto tipo json
const app = express ()
const api = require('./routes/index')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())   //al definir esta línea, ya podemos usar la extención req.body
                            //el .json nos permite leer los datos en archivo .json
app.use('/api', api)



module.exports = app