require("dotenv").config()

const config = {
    dbName: process.env.DB_NAME,
    dbUri: process.env.DB_URI,
    port: process.env.PORT,
}

module.exports = config