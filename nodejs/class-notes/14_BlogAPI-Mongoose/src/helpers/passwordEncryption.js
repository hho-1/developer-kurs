'use strict'

const crypto = require('node:crypto')

const keyCode = process.env.SECRETKEY || 'write random characters'
const loopCount = 10000
const charCount = 32           // 32 means 64, 64 means 128,    duplicates
const encryptType = 'sha512'

module.exports = function(password){
    const encode = crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encryptType)
    //return buffer type
    return encode.toString('hex')
}