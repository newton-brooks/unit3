const laureates = require('./laureates')
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


const laureatesByPrize = (prize) => {
    return laureates.filter((people) => {
        return people.prizes.includes(prize)
    })
}


app.get("/prize/:prize", (req,res) => {  
    res.send(laureatesByPrize(req.params.prize))
})



app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
