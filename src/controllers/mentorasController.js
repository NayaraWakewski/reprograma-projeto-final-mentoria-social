const mongoose = require('mongoose')
const Mentora = require('../models/mentorasModels')

const criaMentora= async (req, res)=>{
    
    const mentora = new Mentora({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        cidade: req.body.cidade,
        profissao: req.body.profissao,
        resumo_das_experiencias: req.body.resumo_das_experiencias,
        linkedIn: req.body.linkedIn,
        email: req.body.email,
        criadoEm: req.body.criadoEm
    })

    const existMentora = await Mentora.findOne({ email: req.body.email })
    if (existMentora) {
        return res.status(409).json({ error: "Mentora já existe" })
    }

    try {
        const novaMentora = await mentora.save()
        res.status(201).json(novaMentora)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const listaMentoras = async (req, res)=> {
    const mentora = await Mentora.find()
    res.status(200).json(mentora)
}

const listaUmaMentora = async (req, res ) => {
    const mentora = await Mentora.findById(req.params.id)

    if (mentora == null) {
        return res.status(404).json({ message: 'Desenvolvedora não encontrada!'})
    }

    res.json(mentora)
}


const atualizaMentora = async (req, res)=>{
    try {
        const mentora = await Mentora.findById(req.params.id)
        if (mentora == null) {
            return res.status(404).json({ message: 'Mentora não encontrada!'})
        }

        if (req.body.nome != null) {
            mentora.nome = req.body.nome
        }

        if (req.body.cidade != null) {
            mentora.cidade = req.body.cidade
        }

        if (req.body.profissao != null) {
            mentora.profissao = req.body.profissao
        }

        if (req.body.resumo_das_experiencias != null) {
            mentora.resumo_das_experiencias = req.body.resumo_das_experiencias
        }
    
        if (req.body.linkedIn != null) {
            mentora.linkedIn = req.body.linkedIn
        }
        
        if (req.body.email != null) {
            mentora.email = req.body.email
        }

        if (req.body.criadoEm != null) {
            mentora.criadoEm = req.body.criadoEm
        }

        const mentoraAtualizada = await mentora.save()
        res.status(200). json({
            message: "Mentora Atualizada", mentoraAtualizada})
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaMentora = async (req, res)=>{
    const mentora = await Mentora.findById(req.params.id);

    if (mentora == "" || mentora == null) {
        return res.status(404).json({ message: 'Mentora não encontrada!'})
    }

    try {
        await mentora.remove()
        res.json({ message: 'Mentora deletada com sucesso!'})

    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}


module.exports = { 
    criaMentora,
    listaMentoras,
    atualizaMentora,
    deletaMentora,
    listaUmaMentora

}