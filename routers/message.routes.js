const MessageRoutes=require('express').Router()
const MessageController=require('../controllers/message.controller')
const AuthMiddleware=require('../middlewares/auth.middleware')
const saveMsgMiddlware=require('../middlewares/saveMsg.middleware')
MessageRoutes.post('/saveMsg',require('../validations/message.validations'),saveMsgMiddlware,MessageController.saveMessage)
MessageRoutes.get('/getMsg',AuthMiddleware,MessageController.FindAllMessages)
module.exports=MessageRoutes