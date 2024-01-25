const express = require('express')
const path = require('path')
const port = 3000
const config = require("./config/config")

const server = express()

server.set('port', config.port || port)
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')
server.set('trust proxy', 1)
server.use(express.static(path.join(__dirname, 'public')))

module.exports = server 