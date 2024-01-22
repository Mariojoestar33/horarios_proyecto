const express = require('express')
const path = require('path')
const port = 3000

const app = express()

app.set('port', process.env.PORT || port)
app.set('view', path.join(__dirname, 'views'))

module.exports = app