const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.models');


userRouter.post("/register", (req, res) => {
    const { Name, email, password, gender, age } = req.body;
    try {
        bcrypt.hash(password, 8, async (err, hash) => {
            if (hash) {
                const user = new UserModel({ Name, email, password: hash, gender, age });
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
                const token = jwt.sign({ userID: user._id, author: user.Name }, "masai");
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