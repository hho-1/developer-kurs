"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// https://mongoosejs.com/docs/queries.html

// Catch async-errors and send to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require('../../models/blogModel')

// ------------------------------------------
// BlogPost
// ------------------------------------------
module.exports.BlogPost = {

    list: async (req, res) => {
        
        const data = await res.getModelList(BlogPost, 'blogCategoryId')

        // res.status(200).send({
        //     error: false,
        //     count: data.length,
        //     details: await res.getModelListDetails(BlogPost),
        //     result: data,
        // })


        const categories = await BlogCategory.find()
        const recentPosts = await await BlogPost.find().sort({ createdAt: 'desc'}).limit(3)
        const details = await res.getModelListDetails(BlogPost)

        if(!req.originalUrl.includes('?')) req.originalUrl += '?'
        res.render('index', {
            categories,
            posts: data,
            recentPosts,
            details,
            pageUrl: req.originalUrl.replace(/[?|&]page=([^&]+)/gi, '') // clean 'page' queries from url.
        })
    },


    // CRUD ->

    create: async (req, res) => {

        if(req.method == 'POST'){
            const data = await BlogPost.create(req.body)

            // res.status(201).send({
            //     error: false,
            //     body: req.body,
            //     result: data,
            // })
            res.redirect('/post' + data.id)
        }
        else{
            res.render('postForm', {
                post: null
            })
        }
        
        

        
    },

    read: async (req, res) => {
        
        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId') // get Primary Data

        // res.status(200).send({
        //     error: false,
        //     result: data
        // })
        res.render('postRead')

    },

    update: async (req, res) => {

        if(req.method == 'POST'){
            const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body, { runValidators: true })

            // res.status(202).send({
            //     error: false,
            //     body: req.body,
            //     result: data, // update infos
            //     newData: await BlogPost.findOne({ _id: req.params.postId })
            // })
            res.redirect('/post' + data.id)
        }
        else{
            const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId') 
            res.render('postForm', {
                post: data
            })
        }
        
        

    },

    delete: async (req, res) => {
        
        const data = await BlogPost.deleteOne({ _id: req.params.postId })

        //res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )

        res.redirect('/post')
    },
}