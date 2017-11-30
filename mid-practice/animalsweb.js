const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('dev'))


app.get("/", (req,res) => {     
    res.send(`<h1>Animals</h1>
        <ul>
            <li><a href="birds">birds</a></li>
            <li><a href="reptiles">reptiles</a></li>
            <li><a href="mammals">mammals</a></li>
        </ul>
    `)
})

app.get("/birds", (req,res) => {     
    res.send(`<h1>Birds</h1>
    <p>birds are cool, theres some pigeons in my backyard
    <a href="/">Home</a>  
    `)
})

app.get("/reptiles", (req,res) => {     
    res.send(`<h1>Reptiles</h1>
    <a href="/">Home</a>
    `)
})

app.get("/mammals", (req,res) => {     
    res.send(`<h1>mammals</h1>
    <p>them reptiles be bugging</p>
    <a href="/">Home</a>
    
    `)
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})