'use strict'

const mongoose = require('mongoose')


const blogPostSchema = new mongoose.Schema(
    {
    //_id
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
        trim: true,
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'BlogCategory',
        required: true,
        trim: true,
    },
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
        timestamps: true
    }
)
const blogCategorySchema = new mongoose.Schema(
    {
    //_id
    name: {
        type: String,
        required: true,
        trim: true,
    },
    }
    ,
    {   
        collection: 'blogCategories', 
        timestamps: true
    }
)
//const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)
module.exports = {
    BlogPost: mongoose.model('BlogPost', blogPostSchema),
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),

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