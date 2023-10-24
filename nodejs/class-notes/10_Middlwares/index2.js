'use strict'
console.log('index2.js started')

const exp= require('express')
const app=exp()
// const PORT=8000
require('dotenv').config()
// console.log(process.env)
const PORT=process.env.PORT




app.listen(PORT,()=>console.log('server running on http://127.0.0.1:'+PORT))