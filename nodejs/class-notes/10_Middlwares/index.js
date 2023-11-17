'use strict'
console.log('index.js started')

const exp= require('express')
const app=exp()
// const PORT=8000
require('dotenv').config()
// console.log(process.env)
const PORT=process.env.PORT
//? middlawares and next
/*
app.get('/',(req,res,next)=>{
    console.log(' first middleware')
    req.customData='custom data 1 added by first middleware'
    next()
    // console.log(' first midw after next')
    // res.send({
    //     message:"welcome FIRST middlaware"
    // })
})
app.get('/',(req,res,next)=>{
    console.log(' second middleware')
    req.customData2='custom data 2 added by first middleware'
    next()   
})
app.get('/',(req,res)=>{
    res.send({
        myDatas:{
            myData1:req.customData,
            myData2:req.customData2
        },
        message:"get request answered"
    })
})
*/
//? my middleware functions
/*
const myFunction1=(req,res,next)=>{
    const x=req.query.x
    console.log('my function1')
    req.customData='custom data 1 added by my myFunction1 middleware'
    if (x==1){
        next()
    }        
    else if(x==2){
        next('route')
    }
        
}
const myFunction2=(req,res,next)=>{
    console.log('my function2')
    req.customData2='custom data 2 added by myFunction2  middleware'
    next()
}

app.get('/',[myFunction1,myFunction2],(req,res)=>{
    console.log('get function')
    res.send({
        myDatas:{
            myData1:req.customData,
            myData2:req.customData2,
        },
        message:"get request answered"
    })
})
app.get('/',(req,res)=>{
    console.log('2. get function')
    res.send({
        message:"get request answered by 2. get"
    })
})
*/
//? using middleware with use


// app.use(myFunction1,myFunction2) // default all paths
// app.use('/',myFunction1) // default all paths
//app.use('/home1',myFunction1) // for  home1 paths
//app.use('/home2',myFunction2) // for  home2 paths


app.get('/',(req,res)=>{
    console.log('get function')
    res.send({
        myDatas:{
            myData1:req.customData,
            myData2:req.customData2,
        },
        message:"get request answered by HOME"
    })
})
app.get('/home2',(req,res)=>{
    console.log('get function')
    res.send({
        myDatas:{
            myData1:req.customData,
            myData2:req.customData2,
        },
        message:"get request answered"
    })
})

app.listen(PORT,()=>console.log('server running on http://127.0.0.1:'+PORT))