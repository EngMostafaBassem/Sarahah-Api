const userRouters=require('express').Router()
const userController=require('../controllers/user.controller')
userRouters.post("/login",require('../validations/login.validations'), userController.login)
userRouters.post("/register",require('../validations/register.validations'),userController.register)
userRouters.post("/getUser",userController.info)
module.exports=userRouters