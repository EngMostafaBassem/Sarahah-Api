const MessageRepos=require('../repos/message.repos')
const { validationResult } = require('express-validator');
exports.saveMessage=(req,res)=>{
    //here will save message
   const errors=validationResult(req)
   if(!errors.isEmpty()){
    res.status(400).json({response:{msg:'validations errors',errors:errors.array()}})
   }
   else{
    if(req._id&&req._id==req.body.user){
        res.status(400).json({response:{msg:'You cannot send message to your self'}})
    }
    else{
        MessageRepos.saveMsg(req.body).then(data=>{
            res.status(data.status).json({response:data})
        }).catch(err=>{
            res.status(err.status).json({response:err})
        })
       }
    }
  
  
}
exports.FindAllMessages=(req,res)=>{
    //here will save message
    let _id=req._id
    let page=req.query.page
   MessageRepos.findAllMessages(_id,page).then(data=>{
     res.status(data.status).json({response:data})
   }).catch(err=>{
    res.status(err.status).json({response:err})
})
}