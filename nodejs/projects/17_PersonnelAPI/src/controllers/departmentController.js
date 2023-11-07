/*-----PersonnelAPI    departmentController-----*/

'use strict'

const Department=require('../models/departmentModel')
module.exports={

    list: async(req,res)=>{

        const data=await Department.find()
        
        res.status(200).send({
            error:false,            
            result: data   
        
        })

    },
    create: async(req,res)=>{
        const data=await Department.create(req.body)
        res.status(201).send({
            error:false,            
            result: data   
        
        })

    },

    read: async(req,res)=>{
        const data=await Department.findOne({_id:req.params.id})
        res.status(200).send({
            error:false,            
            result: data   
        
        })

    },

    update: async(req,res)=>{
        const data=await Department.updateOne({_id:req.params.id},req.body,{runValidators:true })
        res.status(200).send({
            error:false,            
            result: data   
        
        })

    },

    delete: async(req,res)=>{
        
        const data = await Department.deleteOne({_id:req.params.id})        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    }
}