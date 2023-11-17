'use strict'

const router = require('express').Router()

const Todo = require('./todoModel')


//?READ

/* router.get('/', async (req, res)=> {
    
    const data = await Todo.findAll()
    
    console.log(data);
    
    res.send({
        result: data,
        message: 'Get method'
    }
    )
}) */

//?CREATE

router.post('/api', async (req, res)=> {
    
    /* const data = await Todo.create({
        title: 'Test 1',
        description: 'Test1 description',
        priority: 2
    }) */
    const data = await Todo.create(
        req.body
    )
    
    console.log(data);
    
    res.send({
        result: data,
        message: 'Post method'
    }
    )
})

module.exports = router