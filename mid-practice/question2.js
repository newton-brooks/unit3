const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))

const hint = (num) => {
    if (num > 42) {
        return `Lower`
    } else if (num < 42) {
        return `Higher`
    } else {
        return `correct`
    }
}


app.get("/:num", (req, res) => {
    let response = {
        guess: req.params.num,
        hint: hint(Number(req.params.num))
    }
    res.send(response)
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})