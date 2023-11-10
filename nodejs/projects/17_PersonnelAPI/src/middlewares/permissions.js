//! -----   PERMISSONS  -----

'use strict'

module.exports={
 

    isLogin:(req,res,next)=>{

        if(req.user){
            next()
        }else{
            res.errStatusCode=403
            throw new Error('You must login')
        }
    },
    
    isAdmin:(req,res,next)=>{
        console.log('******************');
        console.log(req.user);
        if(req.user && req.isAdmin ){
            next()
        }else{
            res.errStatusCode=403
            throw new Error('You must login as a admin')
        }

    },

   isAdminOrLead:(req,res,next)=>{ // user kendi departmanının lideri ise veya admin ise
        if(req.isAdmin && (req.isLead && departmentId==req.user.departmentId )){

            next
        }else{
            res.errStatusCode=403
            throw new Error('You must login as a admin or department lead')
        }
   },    
   isAdminOrOwner:(req,res,next)=>{ // user kendi ise veya admin ise
        if(req.Admin && (id==req.user._id )){

            next
        }else{
            res.errStatusCode=403
            throw new Error('You must login as a admin or owner')
        }
   }

}