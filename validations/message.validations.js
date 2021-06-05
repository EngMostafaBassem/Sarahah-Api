const { body} = require('express-validator');

const validations=[
  
    body('content').notEmpty(),
    body('user').notEmpty()
]
module.exports=validations