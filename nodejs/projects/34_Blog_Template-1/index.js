"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session")
app.use(session({ secret: process.env.SECRET_KEY || 'secret_keys_for_cookies' }))
/* ------------------------------------------------------- */
// TEMPLATE:
// $ npm i ejs

// const ejs = require('ejs')
// // default using in template: <% JSCodes %>
// ejs.delimiter = '*' // default: %
// ejs.openDelimiter = '{' // default: <
// ejs.closeDelimiter = '}' // default: >

app.set('view engine', 'ejs')
app.set('views', './public')
app.set('view options', {
    openDelimiter: '{',
    closeDelimiter: '}',
})

// Accept form data & convert to object:
app.use(express.urlencoded({ extended: true }))

// Call staticFiles:
app.use('/assets', express.static('./public/assets'))
// TinyMCE static files:
app.use('/tinymce', express.static('./node_modules/tinymce'))

/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// Connect to MongoDB with Mongoose:
require('./src/dbConnection')

app.use((req, res, next) => {

    // FOR TEMPLATES: Check user from session and set to locals:
    // Global variables for templates:
    res.locals.user = req.session?.user

    next()

})

// Searching&Sorting&Pagination:
app.use(require('./src/middlewares/findSearchSortPage'))

// HomePage:
// app.all('/', (req, res) => {
//     res.send('WELCOME TO BLOG API')
// })

// Routes / View:
app.use('/', require('./src/routes/view'))
// Routes / API:
app.use('/api/blog', require('./src/routes/api/blogRoute'))
app.use('/api/user', require('./src/routes/api/userRoute'))

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))