const express = require("express")
const app = express()
const cors = require("cors")

const db = require("./data/dbConfig")
db.connect()

app.use(express.json())
app.use(cors())

//usar as rotas
const Desenvolvedora = require('./routes/desenvolvedorasRoutes')
app.use('/desenvolvedoras',Desenvolvedora)

const Mentora = require('./routes/mentorasRoutes')
app.use('/mentoras',Mentora)

const index = require("./routes/index")
app.use("/", index);

module.exports = app