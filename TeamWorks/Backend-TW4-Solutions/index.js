'use strict'

const exp = require('express')
const app = exp()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

//const router1 = require('./router1')

//app.use('/', require('./router2'))

/* const errorHandler = (err, req, res, next) => {
    res.status(500).send({
        message: 'This is an error message' + err.stack
    })
}

app.use((req, res, next) => {
    throw new Error('Something went wrong!');
});

app.use(errorHandler); */

const homeRoute = require(('./homeRoute'))
const loginRoute = require(('./loginRoute'))

app.use('/home', homeRoute)
app.use('/login', loginRoute)



app.listen(PORT, HOST, ()=> {console.log(`Server is running on http://${HOST}:${PORT} `)})