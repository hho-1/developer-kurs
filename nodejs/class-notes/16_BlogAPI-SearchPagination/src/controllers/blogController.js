//! BLOG CONTROLLER 

'use strict'
require('express-async-errors')
const {BlogPost,BlogCategory} =require('../models/blogModel')

module.exports.BlogCategory={

    list: async(req,res)=>{

        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async(req,res)=>{

        const data = await BlogCategory.create(req.body)

        res.status(200).send({
            error: false,
            count: data.length,
            result: res.body,
            result: data            

        })
    },

    read: async(req,res)=>{
        
        const data = await BlogCategory.findOne({_id:req.params.categoryId})
        // const data = await BlogCategory.findById(req.params.categoryId)
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    update: async(req,res)=>{
        
        const data = await BlogCategory.updateOne({_id:req.params.categoryId},req.body)
               
        res.status(202).send({
            error: false,
            count: data.length,
            result: data,
            newData: await BlogCategory.findOne({_id:req.params.categoryId})
        })
    },
    delete: async(req,res)=>{
        
        const data = await BlogCategory.deleteOne({_id:req.params.categoryId})
        console.log(data);        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    }
}


module.exports.BlogPost={

    list: async(req,res)=>{
    /* moved to searchSortPagination.js    
        //? SEARCHING
        // console.log(req.query)
        // console.log(req.query.search)
        const search=req.query?.search || {}

        // const data = await BlogPost.find({title:'test 0 title'})
        // const data = await BlogPost.find(search) // eşitlik araması yapar

        // içinde araması için regex 
        //https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        // { <field>: { $regex: 'pattern', $options: '<options>' } }
        // const data = await BlogPost.find({title:{ $regex:'test 13',$options: 'i'}})
        // const data = await BlogPost.find({title:{ $regex:search.title,$options: 'i'}})

        // URL?search[key1]=value1&search[key2]=vaue2

        // console.log('***before**')
        // console.log(req.query.search)
        for (let key in search) search[key]={$regex: search[key], $options: 'i'}
        // console.log('***after**')
        // console.log(req.query.search)
              

        //? SORTING
        // URL?sort[key1]=1&sort[key2]=-1       (ASC=1,DESC=-1)
        //http://127.0.0.1:8000/blog/post?sort[title]=-1&sort[content]=-1
        const sort=req.query?.sort || {}
        // console.log(req.query.sort)
        
        // const data = await BlogPost.find(search).sort(sort)

        //? PAGE & LIMIT
        console.log(req.query.limit)
        console.log(req.query.page)

        let limit=Number(req.query?.limit) 
        limit= (limit>0 ? limit : (process.env.LIMIT || 10) )


        let page=Number(req.query?.page) 
        page= (page>0 ? page : 1) -1 
                
        let skip=Number(req.query?.skip) 
        skip = skip >0 ? skip : (page*limit )

        //http://127.0.0.1:8000/blog/post?limit=10&page=5
        const data = await BlogPost.find(search).skip(skip).limit(limit).populate("categoryId")

*/
        
        // const data=await BlogPost
        //  const data = await BlogPost.find().populate("categoryId")

        const data=await res.getMmodelList(BlogPost)

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },
    //belirli bir kategory icin yapılan postlar
    //  /blog/post
    listCategoryPosts: async(req,res)=>{
        
        const data = await BlogPost.find({categoryId:req.params.categoryId}).populate("categoryId")       
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async(req,res)=>{
        // const data=await BlogPost
        const data = await BlogPost.create(req.body)

        res.status(200).send({
            error: false,
            // count: data.length,
            result: res.body,
            result: data
            

        })
    },

    read: async(req,res)=>{
        
        const data = await BlogPost.findOne({_id:req.params.postId}).populate("categoryId")
        // const data = await BlogPost.findById(req.params.postId)
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    update: async(req,res)=>{
        
        const data = await BlogPost.updateOne({_id:req.params.postId},req.body)
               
        res.status(202).send({
            error: false,
            count: data.length,
            result: data,
            newData: await BlogPost.findOne({_id:req.params.postId})
        })
    },
    delete: async(req,res)=>{
        
        const data = await BlogPost.deleteOne({_id:req.params.postId})
        console.log(data);        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    }
}
