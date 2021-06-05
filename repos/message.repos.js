const Message=require('../models/message.model')
const User=require('../models/user.model')
exports.saveMsg=(body)=>new Promise( async(resolve,error)=>{
    try{
      const {user,content}=body
      const db_user=await User.findOne({_id:user}).exec()
      if(db_user){
        await Message.insertMany({content,user})
        resolve({status:201,msg:'New message has been added succefully'})
      }
     else{
         error({status:404,msg:'No target user has been found'})
     }
      }catch(ex){
       error({status:500,msg:ex.message})
     }
})

exports.findAllMessages=(userId,page)=>new Promise( async(resolve,error)=>{
    try{
       if(page==undefined||page<=0)page=1
       let messages=await Message.find({user:userId}).skip((page-1)*5).limit(5).exec()
       resolve({status:200,messages})
    }catch(ex){
       error({status:500,msg:ex.message})
    }
})