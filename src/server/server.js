const express = require('express')
const path = require('path')
const config = require('./config/config')

const port = config.port || 3000
const server = express()

server.set('port', port)
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')
server.set('trust proxy', 1)

// Configuración para servir archivos estáticos desde la carpeta 'public'
server.use(express.static(path.join(__dirname, '../../public')))

module.exports = server