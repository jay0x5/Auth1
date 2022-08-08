const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const route = require('./routes/routes')
const cors = require('cors')  

const app = express()

const PORT = process.env.PORT
const MONGOCON = process.env.MONGODB

//middleware
app.use(express.json())
app.use(cors())
app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.use("/",route)




//CONNECTIONS =>
console.log('waiting to connect...')
mongoose.connect(MONGOCON)
.then(()=>{
    app.listen(PORT, () =>{
        console.log("DB connected! Server started on: " + PORT)
    })

}).catch((error) =>{
    console.log(error)
})





