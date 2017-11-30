const laureates = require('./laureates')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


const laureatesByFirstName = (firstName) => {
    return laureates.filter((name) => {
        return name.firstName === firstName
    })
}

const laureatesByLastName = (lastName) => {
    return laureates.filter((name) => {
        return name.lastName === lastName
    })
}


app.get("/firstname/:firstName", (req,res) => {  
    res.send(laureatesByFirstName(req.params.firstName))
})

app.get("/lastname/:lastName", (req,res) => {  
    res.send(laureatesByLastName(req.params.lastName))
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})


