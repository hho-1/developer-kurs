'use strict'


const {BlogPost} = require('../models/blogModel')

module.exports.BlogPost = {
    list: async(req, res) => {
        const data = await BlogPost.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },
    create: async(req, res) => {
        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            result: body,
            result: data
        })
    }
}