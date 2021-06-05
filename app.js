const express=require('express')
const mongoose = require('mongoose');

//intital setup
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//initalize mongoose 
mongoose.connect('mongodb://localhost/SarahahAPI', {useNewUrlParser: true, useUnifiedTopology: true});

//setup routers
app.use(require('./routers/user.routes'))
app.use(require('./routers/message.routes'))

//set Port
app.listen(env.process.PORT||3000)