const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const fs = require('fs');
app.use(morgan('dev'))


var suits = ['hearts', 'diamonds', 'spades', 'clubs']
var value = [[2,2],[3,3] [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10], ['jack',10], ['queen',10], ['king',10], ['ace',11]]

var total = 0
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
                total += value1
            } else {
                var value1 = value[Math.floor(Math.random() * 13)]
                var suits1 = suits[Math.floor(Math.random() * 4)]
                newStr.push(`${value1} of ${suits1}`)
                total += value1
            }
        }
        return newStr.join('\n')
    }
}

const rec = (total) => {
    if(total <= 17) {
        return  `recommendation: hit(refresh)`
    } else if(total > 17) {
        return 'reccomendation: stand'
    } else if(total = 21) {
        return 'reccomendation: You win!'
    } else {
        return "BUST!"
    }
}


app.get("/", (req,res) => {    
    res.writeHead(200, {'Content-Type': 'text/html'}) 
    res.write(`${chooseCard(suits,value,2)}`)
    res.write(total)
    res.end()
    
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
