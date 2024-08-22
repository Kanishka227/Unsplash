const express = require("express")
const connectDatabase = require("./connectMongoDB/connect")
require("dotenv").config()
const cors = require("cors")

const app = express()
const PORT = process.env.PORT

app.use(cors())

connectDatabase()

app.listen(PORT,() => console.log(`listening at http://localhost/${PORT}`))
