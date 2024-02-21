const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.models');


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
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user._id, author: user.Name }, "masai", { expiresIn: '7d' });
                res.send({ "msg": "Login successful!", token });
            } else {
                res.status(401).send({ "msg": "Wrong Credentials", err });
            }
        });
    } catch (err) {
        res.status(500).send({ "error": err });
    }
});



module.exports = {
    userRouter
}