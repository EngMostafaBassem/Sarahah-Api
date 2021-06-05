const UserRepos=require('../repos/user.repos')
const { validationResult } = require('express-validator');
exports.register=(req,res)=>{
  //register
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).json({response:{msg:'Validations errors',errors:errors.array()}})
  } 
  else{
    UserRepos.SaveUser(req.body).then(data=>{
      res.status(data.status).json({response:data})
    }).catch(err=>{
      res.status(err.status).json({response:err})
    
    })
  }
 
}

exports.login=(req,res)=>{
    //login
    const errors = validationResult(req); 
    if(!errors.isEmpty()){
      res.status(400).json({response:{msg:'Validations errors',errors:errors.array()}})
    }
   else{
    UserRepos.login(req.body).then(data=>{
      res.status(data.status).json({response:data})
    }).catch(err=>{
      res.status(err.status).json({response:err})
    })
   }
}
