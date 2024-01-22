const mongoose = require('mongoose')

const mongoDB_URI = 'mongodb://localhost:27017//upiita'

mongoose.connect(mongoDB_URI)

const conn = mongoose.connection

conn.once('open', () => {
    console.log('Conexion correcta a la base de datos')
})