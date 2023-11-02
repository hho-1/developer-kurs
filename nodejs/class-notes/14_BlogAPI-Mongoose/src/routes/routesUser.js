'use strict'

const router=require('express').Router()

//const {blogPost}=require('../models/blogModel')

const  {User}  = require('../controller/controllerUser')



router.route('/')
    .get(User.list)
    .post(User.create)
router.route('/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)
    
    
    

module.exports=router