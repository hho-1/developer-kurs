'use strict'

/*  TODO controller */
//npm i express-async-errors
require('express-async-errors')

const Todo=require('../models/todoModel')

// CRUD

// READ all list
module.exports= {
    list: async(req,res)=>{
    
        // const data=await Todo.findAll()
        const data=await Todo.findAndCountAll()
        console.log(data)
        res.status(200).send(
            {
                result:data,
                message:'get method'
            }
        )    
    },
    //CREATE = POST
    post: async(req,res)=>{
        console.log('**********')
        console.log(req.body)
        console.log('**********')

        // const data=await Todo.create({
        //     title:'test 1',
        //     description:' test1 description',
        //     priority:2
        // })  
        const data=await Todo.create(req.body) 
        
        // console.log("*******");
        // console.log(req.body)
        // console.log("*******");
        res.status(201).send(
            {
                result:data,
                message:'post method'

            }
        )
    },
    // Read by id
    read:   async(req,res)=>{
        // const id=req.params.id
        // const data=await Todo.findAll({where:{priority:2}})
        const data=await Todo.findByPk(req.params.id)
        // console.log(data)
        res.status(200).send(
            {
                result:data,
                message:'get with id'
            }
        )
    },
    // UPDATE = PUT (PUT require PATCH)
    update: async(req,res)=>{
  
        //update ({body},{filter})
        const isUpdated=await Todo.update(req.body, {where:{id:req.params.id}})
        console.log("*******");
        console.log(req.body)
        console.log("*******");
        res.status(202).send(
            {
                    // result:isUpdated,
                    body: req.body,
                    after: await Todo.findByPk(req.params.id),
                    message:'record updated'
            }
            ) 
    },
    // DELETE =DESTROY
    delete:async(req,res)=>{
  
        //update ({filter})
        const isDeleted=await Todo.destroy({where:{id:req.params.id}})
        console.log("*******");
        console.log(req.body)
        console.log("*******");
        
        if(isDeleted){
            res.status(202).send(
                {
                    result:isDeleted,
                    message:'get with id'
                }
            )
        } 
        else {
            res.statusCode(404)
        }
    }
    
}

