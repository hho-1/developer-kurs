const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send({
        message: "This is the login request"
    })
})
module.exports=router