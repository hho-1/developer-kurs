'use strict'


const myFunction2=(req,res,next)=>{
    console.log('my function2')
    req.customData2='custom data 2 added by myFunction2  middleware'
    next()
}
const myFunction1=(req,res,next)=>{

    console.log('my function1')
    req.customData='custom data 1 added by my myFunction1 middleware'
    next()   
        
}