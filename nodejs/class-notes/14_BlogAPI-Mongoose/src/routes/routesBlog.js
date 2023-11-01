'use strict'

const router=require('express').Router()

//const {blogPost}=require('../models/blogModel')

const  {BlogPost}  = require('../controller/controllerBlog')


router.route('/')
    .get(BlogPost.list)
    .post(BlogPost.create)
    

module.exports=router