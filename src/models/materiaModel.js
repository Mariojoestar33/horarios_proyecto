const { client } = require('../views/database')
const config = require("../config/config")

const database = client.db(config.dbName)

const materia = database.collection("telematica")

module.exports = {database, materia}