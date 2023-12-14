'use strict'

//!Pizza Api

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

require('express-async-errors')


app.use(express.json()) //middleware

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Pizza API Project'
    })
})


const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

app.use(require('./src/middlewares/errorHandler'))



app.listen(PORT, console.log('Server is running on http://' + HOST + ':' + PORT))