require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    
    })
    .then(()=>{
        console.log("Conectadas no MongoDb Atlas")
    })
    .catch((error)=>{
        console.log("Algo deu errado")
        console.error(error)
    })
}

module.exports = { connect }
