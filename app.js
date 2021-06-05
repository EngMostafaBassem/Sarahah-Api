const express=require('express')
const mongoose = require('mongoose');

//intital setup
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//initalize mongoose 
mongoose.connect('mongodb+srv://dbfcis:j4MQgkB76feFW7y@cluster0.a5rkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/SarahahAPI', {useNewUrlParser: true, useUnifiedTopology: true});

//setup routers
app.use(require('./routers/user.routes'))
app.use(require('./routers/message.routes'))

//set Port
app.listen(process.env.PORT||3000)