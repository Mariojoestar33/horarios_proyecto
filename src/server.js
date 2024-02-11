const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const config = require('./config/config')

const port = config.port
const server = express()

server.set('port', port)
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')
server.set('trust proxy', 1)

// Configuración para servir archivos estáticos desde la carpeta 'public'
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server