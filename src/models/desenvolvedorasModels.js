const mongoose = require('mongoose')

const desenvolvedoraSchema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    profissao: {
        type: String,
        required: true
    },
    resumo_das_experiencias: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
        match : /.+\@.+\..+/,
        unique: true
    },
    //criadoEm
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

module.exports = mongoose.model('desenvolvedora', desenvolvedoraSchema)