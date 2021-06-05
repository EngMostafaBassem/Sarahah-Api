
const jwt=require('jsonwebtoken')
const PRIVATE_KEY='LIONOMO'
const authMiddleware=(req,res,next)=>{
  let token=req.headers['token']
  if(token){
    jwt.verify(token,PRIVATE_KEY,function(err,decoded){
     if(err){
        res.status(401).json({response:{msg:'UnAuthorized'}})
     }
     else{
         req._id=decoded._id
         next()
     }
    })
 }
 else{
     res.status(401).json({response:{msg:'UnAuthorized'}})
 }
 
}

module.exports=authMiddleware