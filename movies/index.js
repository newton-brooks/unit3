const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const movies = require('./movies.json')
app.use(morgan('dev'))
// movies.filter((movie) => {
//     if(movie.cast) {
//       movie.cast.split(', ').includes(actor)
//     }
// })



// console.log(movies)

// movies.filter((movie) => {
//     movie.director === "Quentin Tarentino"
// })c

// app.get("/", (req,res) => {     
//     res.send(['some value'])
//     res.send('balhba ragae ')
// })

app.get('/cast/:cast', (req,res) => {
   var actor = req.params.cast
    res.send(movies.filter((movie) => {
        if(movie.cast) {
            return movie.cast.split(', ').includes(actor)
        }    
     }))
})

app.get("/year/:year", (req,res) => {     
    res.send(movies.filter((movie) => {
       return movie.year === Number(req.params.year)
    }))
})

app.get("/title/:title", (req,res) => {     
    res.send(movies.filter((movie) => {
    return movie.title === req.params.title
    }))
})

app.get("genre/:genre", (req,res) => {     
    res.send(movies.filter((movie) => {
       return movie.genre === req.params.genre
    }))
})

app.get("/year/:year/genre/:genre", (req,res) => {     
    res.send(movies.filter((movie) => {
     return movie.year === Number(req.params.year) && movie.genre === req.params.genre  
    }))
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})