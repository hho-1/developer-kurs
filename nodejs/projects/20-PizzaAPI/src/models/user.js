'use strict'

const {mongoose} = require('../configs/dbConnection')

const passwordEncrypted = require('../helpers/paswordEncrypte')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set:(password) => passwordEncrypted(password)
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: [true, 'This email has already been taken'],
        validate: [(email)=> email.includes('@') && email.includes('.'), 'Please enter an email']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {
    collection: 'users',
    timestamps: true
})

module.exports=mongoose.model('User', UserSchema)