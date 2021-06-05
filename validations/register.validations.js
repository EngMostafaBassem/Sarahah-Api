const { body} = require('express-validator');

const validations=[
    body('name').notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').notEmpty().isStrongPassword().isLength({min:6}),
    body('confirmpassword').custom((value, {req }) =>{
        if(value !== req.body.password) {
            throw new Error("verfiy password and password didn't match");
        }
      return true
    })
]
module.exports=validations