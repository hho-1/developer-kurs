const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send(
        {
            message: "This is the homepage request"
        }
        )
})
module.exports=router