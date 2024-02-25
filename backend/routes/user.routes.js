const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.models');
const { BlacklistModel } = require('../models/blacklist.model');


userRouter.post("/register", async(req, res) => {
    const { name, email, password, gender, age } = req.body;
    try {
        const userExsist = await UserModel.findOne({email:email})

        if(userExsist){
            return res.status(400).json({error:"User Already Registered"})
        }
        
        if(!/[A-Z]/.test(password)||!/[1-9]/.test(password)||!/[!@#$%^&*_?":]/.test(password)||password.length<8){
            return res.status(401).json({error:"Password must have One uppercase, One number, and One Special Character"})
        }

        bcrypt.hash(password, 8, async (err, hash) => {
            if (hash) {
                const user = new UserModel({ name, email, password: hash, gender, age });
                await user.save();
                res.send({ "msg": "New user has been registered!" });
            } else {
                res.send({ "msg": "Error creating the hash", "error": err });
            }
        });
    } catch (err) {
        res.send({ "msg": err });
    }
});


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if(!user){
            return res.status(402).json({error:"User Does Not Exist"})
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user._id, author: user.name }, "masai", { expiresIn: '7d' });
                res.json({ "msg": "Login successful!", token ,user:{name:user.name,email:user.email}});
            } else {
                console.log(err);
                res.status(403).send({ "error": "Wrong Credentials", err });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ "error": err });
    }
});

userRouter.get('/logout', async(req,res)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const blist = new BlacklistModel({"blockedtoken":token});
        await blist.save();
        res.send({"msg":"you have been logged out successfully....."})
    } catch (error) {
        res.send({'err':error})
    }
})

module.exports = {
    userRouter
}