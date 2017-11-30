const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


 const commands = {
    repeat: (word) => {
        return word+word
    } ,
    exclaim: (word) => {
        return `${word}!`
    } ,
    reverse: (str) => {
        return str.split('').reverse().join('')
     }
  }


app.get("/:command/:word", (req,res) => {  
    var word = req.params.word
    var command = req.params.command
    if(commands[command]) {
        res.send(commands[command](word))
    } else {
        res.send(`${command} is not a valid command.`)
    }
})



app.listen(port, () => {
    console.log(`listening to port ${port}`)
})