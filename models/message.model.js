const mongoose=require('mongoose')
const messageSchema=new mongoose.Schema({
    content:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})
const messageModel=mongoose.model('Message',messageSchema)

module.exports=messageModel