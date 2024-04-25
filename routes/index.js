const express = require ('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware')

router.get('/', horaMiddleware,(req,res) => {
    res.send(`<h1>Bienvenido</h1> <p>La hora actual es ${req.dateType }</p> <button><a href="/endroute/about">Entrar</a></button>`)
})



module.exports = router;