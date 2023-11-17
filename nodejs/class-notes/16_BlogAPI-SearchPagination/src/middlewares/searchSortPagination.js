'use strict'

modeule.exports=(req,res,next)=>{

    //? SEARCHING
        
    const search=req.query?.search || {}
    for (let key in search) search[key]={$regex: search[key], $options: 'i'}
              

    //? SORTING
    // URL?sort[key1]=1&sort[key2]=-1       (ASC=1,DESC=-1)
    const sort=req.query?.sort || {}   
        
    //? PAGE & LIMIT
    
    let limit=Number(req.query?.limit) 
    limit= (limit>0 ? limit : (process.env.LIMIT || 10) )

    let page=Number(req.query?.page) 
    page= (page>0 ? page : 1) -1 
                
    let skip=Number(req.query?.skip) 
    skip = skip >0 ? skip : (page*limit )

    res.getModelList=async(Model)=>{

        return await Model.find(search).skip(skip).limit(limit)
    } 

    next()
}