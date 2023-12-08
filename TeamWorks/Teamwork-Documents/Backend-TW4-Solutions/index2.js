'use strict'

const exp = require('express')
const app = exp()
require('dotenv').config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

app.use((req, res, next) => {
    console.log('This is our middleware function');
    next()
})

app.get('/', (req, res) => {
    res.send({
        message: ' Hallo backend'
    })
})



app.listen(PORT, HOST, ()=> {console.log(`Server is running on http://${HOST}:${PORT} `)})