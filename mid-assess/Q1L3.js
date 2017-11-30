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


app.get("/:word/:cmd1/:cmd2", (req,res) => {  
    var word = req.params.word
    var firstCommand = req.params.cmd1
    var secondCommand = req.params.cmd2
 res.send(commands[secondCommand](commands[firstCommand](word)))
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})