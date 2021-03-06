require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/usuario', function (req, res) {
    let body = req.body;  
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Ocurrio un error'
        })
    } else {
        
    res.json({
        persona: body
    });
    }   

})
 
app.listen(process.env.PORT, () => {
    console.log('Servidor en puerto ', process.env.PORT);
})