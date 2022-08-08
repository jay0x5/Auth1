const express = require('express')
const mongoose = require('mongoose')
const usermodel = require('../schema/user_schema.js')
require('dotenv').config()


const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const saltRounds = 10;


const router = express.Router()
router.use(express.json())



//defined routes


router.get('/checkusers', async(req,res) =>{
    const getnames = await usermodel.find({}).sort({createdAt: -1})


    res.status(200).json(getnames)
  
})


router.get('/home', async(req,res)=>{

    res.status(200).json("Home")
})


router.post('/createuser',async(req,res) =>{
  
    const {email,password} = req.body

    const hashpass = bcrypt.hashSync(password, 10);

    const jtoken = jwt.sign({email:email,password:hashpass}, process.env.SEC);

    
    
        
    try{
        const userdata = await usermodel.create({email,hashpass,jtoken})
        res.status(200).json(userdata)
        
    }catch(err){
            res.status(400).json({error: err.message})
        }
        
})

//login (To be done)
router.get("/login", async(req,res)=>{

    const {jwtoken} = req.body

    res.status(200).json("Login")
})






module.exports = router