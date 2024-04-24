const express = require('express');
const app = express();

const index = require ('./routes/index');
const endroute = require('./routes/endroute');


app.use('/', index);
app.use('/endroute', endroute);



app.use((req,res) => {
    res.status(404). send(`<h1>Page not found</h1>`)
})

app.listen(3000, () => {
    console.log('Node.js está escuchando en el puerto 3000')
})