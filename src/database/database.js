const { MongoClient, ServerApiVersion } = require('mongodb')
const config = require("../config/config")

//Creacion de instamcia de cliente con la base de datos de MongoDB
const client = new MongoClient(config.dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  }
})

module.exports = { client }