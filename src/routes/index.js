const express = require("express")
const router = express.Router()

router.get("/", (req, res)=> {
    res.status(200).json({
        title: "Girls Who Code",
        version: "1.0.0",
        description: "API de Mentoria Social para Desenvolvedoras",
        author: "Nayara Valevskii"
    });
    
});

module.exports = router;
