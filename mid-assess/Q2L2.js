const laureates = require('./laureates')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


const laureatesByFullName = (firstName, lastName) => {
    return laureates.filter((people) => {
        return people.firstName === firstName && people.lastName === lastName
    })
}


app.get("/fullname/:firstName/:lastName", (req,res) => {  
    res.send(laureatesByFullName(req.params.firstName, req.params.lastName))
})



app.listen(port, () => {
    console.log(`listening to port ${port}`)
})


