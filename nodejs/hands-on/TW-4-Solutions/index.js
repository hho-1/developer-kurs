'use strict'

const exp = require('express')
const app = exp()
require('dotenv').config()


const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'



//const router1 = require('./router/router1')
//const router2 = require('./router/router2')


//!4
// const errorHandler = (err, req, res, next) => {
//     res.status(500).send({
//         message: 'Error-free code is itself an error!'
//     });
// };

/* app.use((req, res, next) => {
    throw new Error('Something went wrong!');
}); */

//app.use(errorHandler)

//!5
const homeroute=require("./router/routeHome")
const loginroute=require("./router/routeLogin")

app.use("/home",homeroute)
app.use("/login",loginroute)

app.listen(PORT,HOST, ()=>{console.log(`server is running on http://${HOST}:${PORT}`)})