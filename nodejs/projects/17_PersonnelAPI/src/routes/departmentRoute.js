/*-----PersonnelAPI    departmentRoute-----*/

'use strict'

const router=require('express').Router()

const department=require('../controllers/departmentController')

router.route('/')
    .get(department.list)       //GET
    .post(department.create)    //POST

router.route('/:id')
    .get(department.read)  
    .put(department.update)     
    .delete(department.delete)     

module.exports=router