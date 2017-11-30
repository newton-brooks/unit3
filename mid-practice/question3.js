const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))



app.get("/string/:S/case/:C", (req,res) => {  
    var convertedVal;  
    if(req.params.C.toLowerCase() === 'upper') {
        convertedVal = req.params.S.toUpperCase()
    } else if(req.params.C.toLowerCase() === 'lower') {
        convertedVal = req.params.S.toLowerCase()
    } else {
        convertedVal = req.params.S
    }
    
let response = {
    original: req.params.Sr,
    command: req.params.C,
    converted: convertedVal
    }
    res.send(response)
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})