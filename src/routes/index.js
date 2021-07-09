const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Girls Who Code",
        version: "1.0.0",
        description: "API de Mentoria Social para Desenvolvedoras",
        author: "Nayara Valevskii"
    });
});

module.exports = router;
