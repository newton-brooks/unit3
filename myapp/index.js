const express = require('express') // import express
const app = express() // create an express server
const port = 3000; // we will use this later
const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1><a href='page2'>Page2</a> ${req.url}`)
}) // routes the '/' URL path to produce a response of 'Hello World!'


app.get('/page2', (req, res) => {
    res.send(`<h1>Hello Worldsstwo!</h1><a href='page3'>Page3</a>`)
  }) // routes the '/' URL path to produce a response of 'Hello World!'
  

  app.get('/users/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
    console.log(req)
  })
  
  // app.get('/users/:name/:favecolor', (req, res) => {
  //   const { name, favecolor } = req.params;
  //   res.send(`hello ${name}! Hope you are having a ${favecolor} day!`)
  // })



  
  app.get('/page3', (req, res) => {
    res.send('Hello World three')
  }) // routes the '/' URL path to produce a response of 'Hello World!'
  
// app.get('*', (req,res) => {
//   res.redirect('/')
// })

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working