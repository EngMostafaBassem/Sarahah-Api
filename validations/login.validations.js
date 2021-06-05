const { body} = require('express-validator');

const validations=[
  
    body('email').isEmail().notEmpty(),
    body('password').notEmpty()
  
]
module.exports=validations