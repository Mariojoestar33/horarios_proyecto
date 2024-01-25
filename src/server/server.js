const express = require('express')
const path = require('path')
const port = 3000
const config = require("./config/config")

const server = express()

server.set('port', config.port || port)
server.set('views', path.join(__dirname, 'views'))

module.exports = server 