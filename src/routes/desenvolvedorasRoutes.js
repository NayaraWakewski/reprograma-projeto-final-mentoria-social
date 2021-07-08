const express = require('express')
const router = express.Router()

const controller = require('../controllers/desenvolvedorasController')

//Create/Criar -> Post
router.post('/', controller.criaDesenvolvedora)

//Read/Ler -> Get
router.get('/', controller.listaDesenvolvedoras)

//Read/Ler -> Get
router.get('/:id', controller.listaUmaDesenvolvedora)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizaDesenvolvedora)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletaDesenvolvedora)

module.exports = router