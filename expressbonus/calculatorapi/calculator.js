const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server

app.use(morgan('dev'))


var operators = ['add', 'sub', 'mul', 'div']

const calc = (cond, num1, num2) => {
    var result = 0;
    if(cond === 'add') {
        return result = parseInt(num1) + parseInt(num2)
    } else if (cond === 'sub') {
        return result = parseInt(num1) - parseInt(num2)
    } else if (cond === 'mul') {
        return result = parseInt(num1) * parseInt(num2)
    } else if(cond === 'div') {
        return result = parseInt(num1) / parseInt(num2)
    } 
}


var server = app.get('/:cond/:num1/:num2', (req, res) => {
    if(!operators.includes(req.params.cond)) {
        res.status(400)
        res.send('The operator is not supported')
    }
    let result = calc(req.params.cond,req.params.num1,req.params.num2 )
    let response = {
        num1:  parseInt(req.params.num1),
        num2:  parseInt(req.params.num2),
        result: result
    }
    res.send(JSON.stringify(response))
})

server.listen(port)


