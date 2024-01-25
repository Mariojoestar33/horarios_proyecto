const { MongoClient, ServerApiVersion } = require('mongodb')
const config = require("../config/config")

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(config.dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

module.exports = { client }