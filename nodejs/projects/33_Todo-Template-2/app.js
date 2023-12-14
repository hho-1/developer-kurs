"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express(); 

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// TEMPLATE:
// $ npm i ejs
// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// Run template engine:
app.set('view engine', 'ejs')

// Default template folder: ./views
app.set('views', './public')

/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// Accept form data & convert to object:
app.use(express.urlencoded({ extended: true })) // Allow array-form-elements

// Router:
// URL: /
app.use('/view', require('./app/routes/todo.view'))
// URL: /api
app.use('/api', require('./app/routes/todo.api'))

// DatabaseConnection:
const { dbConnection } = require('./app/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// errorHandler (Catch Errors):
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));