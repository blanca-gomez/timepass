const express = require('express');
const router = express.Router();
router.get('/about',(req,res) => {
    res.send(`<h1>Bienvenido</h1> <p>Estás en endroute</p>`)
});



module.exports = router;