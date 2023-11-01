'use strict'

const mongoose = require('mongoose')


const blogPostSchema = new mongoose.Schema(
    {
    //_id
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
    }}
    ,
    {   
        collection: 'blogPost', 
        timestamp: true
    }
)
const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)
module.exports = {
    BlogPost: BlogPostModel
}

/* const schemaName = new mongoose.Schema({

    fieldName: {
        type: String,
        default: null,
        unique: true,
        index: true,       // Bir fieldda index kullanirsak aramalari hizlanir
        select: true,      //veri cagrildiginda gelsin mi?
        trim: true,        // gelen veriyi tiraslar
        required: [true, 'error message'],
        enum: [[0,1,2], 'error message'],
        validate: [functionValidate(data), 'error message'],
        get: [functionValidate(data)],
        set: [functionValidate(data)],
    },
    {
        collection: 'collectionName',
    }
}) */