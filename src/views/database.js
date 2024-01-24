const mongoose = require('mongoose')
uri = "mongodb://127.0.0.1:27017/upiita"

async function load() {
  try {
    await mongoose.connect(uri)
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

