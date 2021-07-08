const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "Girls Who Code",
        "version": "1.0.0",
        "mensagem": "Mentoria Social para Desenvolvedoras"
    })
})
