const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const fs = require('fs');
app.use(morgan('dev'))


var suits = ['hearts', 'diamonds', 'spades', 'clubs']
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

const chooseCard = (suits, value, num) => {
    newStr = []
    if (num > 10 || !num) {
        return `Please enter a number, it should be between 1 and 10; inclusive.`
    } else {
        for (var i = 1; i <= num; i++) {
            var value1 = value[Math.floor(Math.random() * 13)]
            var suits1 = suits[Math.floor(Math.random() * 4)]
            if (!newStr.includes(`${value1} of ${suits1}`)) {
                newStr.push(`${value1} of ${suits1}`)
            } else {
                var value1 = value[Math.floor(Math.random() * 13)]
                var suits1 = suits[Math.floor(Math.random() * 4)]
                newStr.push(`${value1} of ${suits1}`)
            }
        }
        return newStr.join('\n')
    }
}



app.get("/:draw/:number", (req,res) => {     
    res.write(`${chooseCard(suits,value,Number(req.params.number))}`)
    res.end()
    
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
