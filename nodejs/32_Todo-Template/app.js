"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express(); 

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* --------------------------------------------------------*/
//TEMPLATE
// npm i ejs
app.set('view engine', 'ejs')

//template folderimizi degistirelim. Artik dosyalari public icinde arayacak
app.set('views', './public')


/*-----------------------------------------------------------*/

/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json())

// Router:
//URL:
app.use('/view', require('./app/routes/todo.view'))

//URL: /api
app.use('/api', require('./app/routes/todo.api'))

// DatabaseConnection:
const { dbConnection } = require('./app/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// errorHandler (Catch Errors):
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));