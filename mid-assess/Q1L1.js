const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


const repeat = (word) => {
    return word + word
}

const exclaim = (word) => {
    return `${word}!`
}

const reverse = (str) => {
    return str.split('').reverse().join('')
}


app.get("/repeat/:word", (req, res) => {
    var word = req.params.word
    res.send(repeat(word))
})

app.get("/exclaim/:word", (req, res) => {
    var word = req.params.word
    res.send(exclaim(word))
})

app.get("/reverse/:word", (req, res) => {
    var word = req.params.word
    res.send(reverse(word))
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})