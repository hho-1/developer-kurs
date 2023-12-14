'use strict'

const express=require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT || 8000


//classic route
// app.get('/', (req, res) => {
//     res.send({message: 'How is it going?'})
// })
// app.get('/about', (req, res) => {
//     res.send({message: 'Here is about page'})
// })

//?Routing

// const router = express.Router()
// router.get('/', (req, res) => {res.send({message: 'How is it going?'})})
// router.get('/about', (req, res) => {res.send({message: 'Here is about page'})})
// router.get('/user/:userID', (req, res) => {res.send({message: 'User page'})})

// app.use(router)

// const router = require('./routes/routes')
// app.use(router)

app.use('/user', require('./routes/user'))

app.listen(PORT,()=>console.log('server running http://127.0.0.1:'+PORT))