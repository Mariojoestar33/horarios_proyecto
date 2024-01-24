const { client } = require('../views/database')

const database = client.db("upiita")

const materia = database.collection("telematica")

module.exports = {database, materia}