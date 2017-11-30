const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))




var baseValue = {
    bin: 2,
    hex: 16,
    dec: 10,
}

var num = req.params.number
var base = req.params.base

app.get("/", (req,res) => {     
       res.send(`Hello!, please input a number followed by a base into the Url`)
   })
   

app.get("/:number", (req,res) => {
     let response =  {
        "original": { "value":req.params.number, "base":10 },
        "conversions": { "decimal": num,"binary": Number(num).toString(2), "hex": Number(num).toString(16) }
      }
      res.send(JSON.stringify(response))
})



app.get("/:number/:base", (req,res) => {
    let response = {
        "original": { "value":req.params.number, "base": baseValue[base]},
        "conversions": { "decimal":parseInt(num, baseValue[base]), "binary": num.toString(2) ,"hex": Number(num).toString(16) }
    }
    res.send(JSON.stringify(response))
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})





























// const baseNum = { bin: 2, hex: 16, dec: 10 }
// /*Object with the numeric value of bases*/

// const base = {
//     bin: (num) => num.toString(2),
//     hex: (num) => num.toString(16),
//     dec: (num) => num.toString(10)
// }
// /*Object of functions that handle numeric conversions*/


// app.get(`/`, (req, res) => {
//     res.send('Welcome! Input a number and a conversion in the url!!')
// })
// /*Opening page message*/


// app.get(`/:number`, (req, res) => {
//     let num = parseInt(req.params.number)
//     let output = {
//         original: { value: num, base: 10 },
//         conversion: { decimal: base.dec(num), bin: base.bin(num), hex: base.hex(num) }
//     }
//     res.send(JSON.stringify(output))
// })
// /*If there is a number in the URL, outputs an object with the value, base and conversions*/


// app.get(`/:number/:base`, (req, res) => {
//     let num = parseInt(req.params.number)
//     let whichBase = req.params.base
//     let baseValue
//     if (base.hasOwnProperty(whichBase)) {
//         baseValue = baseNum[whichBase]
//     } else {
//         baseValue = 10
//     }
//     let output = {
//         original: { value: num, base: baseValue },
//         conversion: { decimal: base.dec(num), bin: base.bin(num), hex: base.hex(num) }
//     }
//     res.send(JSON.stringify(output))
// })
// /*If there is a number and a base, then it converts number based on that base and outputs
// the conversions*/

// app.listen(port, () => {
//     console.log(`${port}`)
// })












   
































