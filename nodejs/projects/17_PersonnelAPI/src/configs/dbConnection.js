/*-----PersonnelAPI    MongoDB  Connection-----*/

'use strict'

const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/personnelAPI')

const dbConnection=function(){
    mongoose.connect(process.env.MONGODB)
        .then(()=>console.log('DB connected'))
        .catch((err)=>console.log('DB NOTconnected',err))
}
module.exports={
    mongoose,
    dbConnection
}
    

