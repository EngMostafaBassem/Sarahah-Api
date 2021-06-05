const User=require('../models/user.model')
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const PRIVATE_KEY='LIONOMO'
exports.SaveUser=(body)=>new Promise(async(resolve,error)=>{
    // here will be logic of add new user
    const {password,email,...rest}=body
    try{  
    //try to find the user by email
  
     let db_user=await User.findOne({email}).exec()
    
     if(!db_user){
       
        bcrypt.hash(password.toString(),4,function(err,hash){
              if(err) {error({status:500,msg:err.message})}
              else{
                User.insertMany({...rest,email,password:hash}).then(()=>{
                   
                    resolve({status:200,msg:'New user has been add successfully'})
              }).catch(err=>{
                  error({status:500,msg:err.message})
              })
              }
        })
    }else{
        error({status:409,message:"User with existing email has been found"})
    }
    }catch(ex){
          error(ex.message)
      }
})

exports.login=(body)=>new Promise(async(resolve,error)=>{
    // here will be logic of login the user to api
    const {email,password}=body
    try{  
    let db_user=await User.findOne({email}).exec()
    console.log(db_user)
    if(db_user){
       console.log(password.toString())
       bcrypt.compare(password.toString(),db_user.password,function(err,decoded){
      
          if(err)error({status:500,msg:err.message})
          if(decoded){
              jwt.sign({_id:db_user._id},PRIVATE_KEY,{algorithm: 'HS256'},function(err,token){
                if(err)error({status:500,msg:err.message})
                resolve({status:200,msg:"User Authenticated successfully",token:token})
              })
          }else{
            error({status:401,msg:'UnAuthorized'})
          }
       })
    }
    else{
        error({status:401,msg:'UnAuthorized'})
    }
}catch(ex){
    error({status:500,msg:ex.message})
}
})