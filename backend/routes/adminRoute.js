const express = require('express');
const AdminAuth = require('../middlewares/AdminAuth');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.models');
const BlockModel = require('../models/blacklist.model');
const adminRoute = express.Router()
adminRoute.post("/login", AdminAuth ,async(req,res)=>{
    try {

        const {admin} = req.admin

        if(admin){
            res.json({message:"Admin Login Successfull"})
        }
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
})
adminRoute.get("/users", async(req,res)=>{

    try {

        const users = await UserModel.find()

        res.json({users:users})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }

})


adminRoute.post("/block/:id", async(req,res)=>{

    try {

        const {id} = req.params

        const user = await UserModel.findOne({_id:id})


        const blocked = BlockModel({email:user.email})
        await blocked.save()

        const users = await UserModel.findByIdAndDelete(id)

        console.log("users")

        res.json({message:"User Has Been Blocked"})
        
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
})

adminRoute.get("/forms", async(req,res)=>{

})


module.exports = adminRoute