const mongoose = require('mongoose')
const Desenvolvedora = require('../models/desenvolvedorasModels')

const criaDesenvolvedora= async (req, res)=>{
    
    const desenvolvedora = new Desenvolvedora({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        cidade: req.body.cidade,
        profissao: req.body.profissao,
        resumo_das_experiencias: req.body.resumo_das_experiencias,
        linkedIn: req.body.linkedIn,
        email: req.body.email,
        criadoEm: req.body.criadoEm
    })

    const existDesenvolvedora = await Desenvolvedora.findOne({ email: req.body.email })
    if (existDesenvolvedora) {
        return res.status(409).json({ error: "Desenvolvedora já existe" })
    }

    try {
        const novaDesenvolvedora = await desenvolvedora.save()
        res.status(201).json({
            message: "Desenvolvedora Cadastrada", novaDesenvolvedora})

    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const listaDesenvolvedoras = async (req, res)=> {
    const desenvolvedora = await Desenvolvedora.find().populate('desenvolvedora')
    res.status(200).json(desenvolvedora)
}

const listaUmaDesenvolvedora = async (req, res ) => {
    try {
    const desenvolvedora = await Desenvolvedora.findById(req.params.id)

    if (desenvolvedora == null) {
        return res.status(404).json({ message: 'Desenvolvedora não encontrada!'})
    }

    res.json(desenvolvedora)
    }catch (error) {
    res.status(500).json({message: error.message})
    }
   }

   
const atualizaDesenvolvedora = async (req, res)=>{
    try {
    const desenvolvedora = await Desenvolvedora.findById(req.params.id)
        if (desenvolvedora == null) {
        return res.status(404).json({ message: 'Desenvolvedora não encontrada!'})
        }
    
        if (req.body.nome != null) {
            desenvolvedora.nome = req.body.nome
        }

        if (req.body.cidade != null) {
            desenvolvedora.cidade = req.body.cidade
        }

        if (req.body.profissao != null) {
            desenvolvedora.profissao = req.body.profissao
        }

        if (req.body.resumo_das_experiencias != null) {
            desenvolvedora.resumo_das_experiencias = req.body.resumo_das_experiencias
        }
    
        if (req.body.linkedIn != null) {
            desenvolvedora.linkedIn = req.body.linkedIn
        }
        
        if (req.body.email != null) {
            desenvolvedora.email = req.body.email
        }

        if (req.body.criadoEm != null) {
            desenvolvedora.criadoEm = req.body.criadoEm
        }
        const desenvolvedoraAtualizada = await desenvolvedora.save()
        res.status(200). json({
            message: "Desenvolvedora Atualizada", desenvolvedoraAtualizada})


    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

const deletaDesenvolvedora = async (req, res)=>{
    try {
    const desenvolvedora = await Desenvolvedora.findById(req.params.id)
  
    if (desenvolvedora == "" || desenvolvedora == null) {
         return res.status(404).json({ message: 'Desenvolvedora não encontrada!'})
    }
        await desenvolvedora.remove()
        res.json({ message: 'Desenvolvedora deletada com sucesso!'})

    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}


module.exports = { 
    criaDesenvolvedora,
    listaDesenvolvedoras,
    atualizaDesenvolvedora,
    deletaDesenvolvedora,
    listaUmaDesenvolvedora

}