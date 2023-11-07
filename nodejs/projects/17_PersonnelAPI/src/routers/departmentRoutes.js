'use strict'


const router=require('express').Router()

const department = require('../controllers/departmentController')

router.route('/')
    .get(department.list)
    .post(department.create)
router.route('/:id')
    .get(department.read)
    .put(department.update)
    .delete(department.delete)

    
    


module.exports = router
