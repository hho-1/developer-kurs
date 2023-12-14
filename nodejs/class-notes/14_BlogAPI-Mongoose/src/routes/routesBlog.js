'use strict'

const router=require('express').Router()

//const {blogPost}=require('../models/blogModel')

const  {BlogPost, BlogCategory}  = require('../controller/controllerBlog')


router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)
router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)


router.route('/category')
    .get(BlogCategory.list)
    .post(BlogCategory.create)
router.route('/category/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)


router.get('/post/:categoryId/posts', BlogPost.listCategoryPosts)
    
    
    
    

module.exports=router