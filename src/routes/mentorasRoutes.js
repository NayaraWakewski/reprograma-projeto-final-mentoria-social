const express = require('express')
const router = express.Router()

const controller = require('../controllers/mentorasController')

//Create/Criar -> Post
router.post('/', controller.criaMentora)

//Read/Ler -> Get
router.get('/', controller.listaMentoras)

//Read/Ler -> Get
router.get('/:id', controller.listaUmaMentora)

//Update/atualizar -> Patch
router.patch('/:id', controller.atualizaMentora)

//Delete/deletar -> Delete
router.delete('/:id', controller.deletaMentora)

module.exports = router