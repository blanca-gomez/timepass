const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora')
router.get('/about',validarHora, (req,res) => {
    res.send(`<h1>Bienvenido</h1>`)
});



module.exports = router;