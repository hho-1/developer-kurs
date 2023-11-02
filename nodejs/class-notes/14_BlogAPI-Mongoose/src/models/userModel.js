'use strict'

const mongoose = require('mongoose')


const  passwordEncryption  = require('../helpers/passwordEncryption')


const userSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "This field is compulsory"],
        trim: true,
        unique: true,
        validate: [
            (email) => (email.includes('@') && email.includes('.'))
        ]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        set:(password) => passwordEncryption(password)
    }}
    ,
    {   
        collection: 'users', 
        timestamps: true
    }
)

module.exports = {
    User: mongoose.model('User', userSchema)
}

