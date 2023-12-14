'use strict'

const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000

require('./src/dbConnection')
app.use(express.json())



const session = require('cookie-session')
app.use(session({secret: process.env.SECRETKEY || 'randomKey for the session'}))

app.all('/', (req, res) => {
    res.send("Welcome to the Homepage")
})

app.use('/blog', require('./src/routes/routesBlog'))
app.use('/user', require('./src/routes/routesUser'))


app.use(require('./src/errorHandler'))        //middleware oldugu icin app.use ile cagirdik

app.listen(PORT, () => console.log('Server is running on http://127.0.0.1:' + PORT))