'use strict'

//npm install sequelize sqlite3
const {Sequelize, DataTypes} = require('sequelize')

//connect to db
const sequelize = new Sequelize('sqlite:./db.sqlite3')


const Todo = sequelize.define('todo', {
    /* id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,            
        allowNull:false,
        comment: 'Description about this field',
        field: 'new column name'
    }, 
    ?ID'yi kendisi otomatik olarak üretiyor.. Onun icin sildik
    */
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    priority:{
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    /* createdDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedDate: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    *Bu iki elemani kendisi zaten olusturyor. Biz de olusturursak iki tane olacak, Onun icin siliyoruz
    
    */


})

//?syncronise with db
//sequelize.sync()    Bunu iptal ettik cünkü her degisikligi aninda db.sqlite dosyasina yansitmiyordu. Bunun yerine alttakini yaziyoruz.
//sequelize.sync({force:true})

//!if you want to change model structure and you have data
//
//sequelize.sync({alter:true})

//?connect to db
//authenticate is an asyncroneous function

sequelize.authenticate()
                        .then(()=>console.log('Connected to DB'))
                        .catch((err)=> console.log('Not connected', err))

module.exports = Todo