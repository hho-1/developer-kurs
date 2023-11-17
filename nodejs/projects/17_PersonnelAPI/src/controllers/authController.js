//! -----   PersonnelAPI    -----
//? authtController

'use strict'

// npm i jsonwebtoken
const jwt=require('jsonwebtoken')

const Personnel=require('../models/personnelModel')

module.exports={
    login: async(req,res)=>{
        

        // userdan username ve password al
        const {username,password}= req.body

        if(username && password){   // username ve pasword geldi ise
            console.log('*** auth login')
            const user=await Personnel.findOne({ username , password})
            console.log(user)
            if(user.isActive){

                const accessData={
                    _id:user._id,
                    departmentId:user.departmentId,
                    username:user.username,
                    firsname:user.firstName,
                    lastname:user.lastName,
                    isActive:user.isActive,
                    isAdmin:user.isAdmin,
                    isLead:user.isLead,
                    
                }    
            

                // const accessToken=jwt.sign(data,key,time )    
                const accessToken=jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '20m' } ) 

                const refreshData={   
                    
                    username:user.username,
                    password:user.password,
                } 
                const refreshToken=jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '40m' } ) 

                
                res.status(200).send({
                    error:false,
                    token:{
                        accessToken:accessToken,
                        refreshToken:refreshToken                        
                    }
                    // islogin:req.isLogin,        
                    // result: data,                  
                
                })
            

            }else{
                res.errStatusCode=401
                throw new Error('user not active')
            }


            
        
        }else{
            res.errStatusCode=401
            throw new Error('username or password missing')

        }



    },
    logout:async (req,res)=>{
        res.send({
                error:false,
                message:"you dont need lopgout"
        })
    }

}
