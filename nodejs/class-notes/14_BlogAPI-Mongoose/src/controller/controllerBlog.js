'use strict'


const {BlogPost, BlogCategory} = require('../models/blogModel')

module.exports.BlogPost = {
    list: async(req, res) => {
        const data = await BlogPost.find().populate("categoryId")

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    listCategoryPosts: async(req,res)=>{
        
        const data = await BlogPost.find({categoryId:req.params.categoryId}).populate("categoryId")       
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },
    create: async(req, res) => {
        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            result: res.body,
            result: data
        })
    },
    read: async(req, res) => {
        const data = await BlogPost.findOne({_id:req.params.postId}).populate("categoryId")
        //const data = await BlogPost.findById(req.params.postId)      // ayni seyi verir

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    update: async(req, res) => {
        const data = await BlogPost.updateOne({_id:req.params.postId}, req.body)

        res.status(202).send({
            error: false,
            result: data,
            count: data.length,
            newData: await BlogPost.findOne({_id:req.params.postId}),      //Yenisini görmek icin
        })
    },
    delete: async(req, res) => {
        const data = await BlogPost.deleteOne({_id:req.params.postId})

        res.status(200).send({
            error: false,
            result: data,
        })
    },
}
module.exports.BlogCategory = {
    list: async(req, res) => {
        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    create: async(req, res) => {
        const data = await BlogCategory.create(req.body)

        res.status(201).send({
            error: false,
            result: res.body,
            result: data
        })
    },
    read: async(req, res) => {
        const data = await BlogCategory.findOne({_id:req.params.categoryId})
        //const data = await BlogCategory.findById(req.params.postId)      // ayni seyi verir

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    update: async(req, res) => {
        const data = await BlogCategory.updateOne({_id:req.params.categoryId}, req.body)

        res.status(202).send({
            error: false,
            result: data,
            count: data.length,
            newData: await BlogCategory.findOne({_id:req.params.categoryId}),      //Yenisini görmek icin
        })
    },
    delete: async(req, res) => {
        const data = await BlogCategory.deleteOne({_id:req.params.categoryId})

        res.status(200).send({
            error: false,
            result: data,
        })
    },
}