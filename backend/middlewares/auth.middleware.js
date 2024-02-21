const jwt = require('jsonwebtoken');
const { BlacklistModel } = require('../models/blacklist.model');

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    const BlacklistToken = BlacklistModel.findOne({"blockedtoken":token});
    if(BlacklistToken){
        return res.status(401).json({ "msg": "You have been logged out. Please log in again with a different token." });
    }
    if (token) {
        const decoded = jwt.verify(token, "masai")
        if (decoded) {
            req.body.userID = decoded.userID
            req.body.author = decoded.author
            next()
        } else {
            res.send({ "msg": "you are not authorised!" })
        }
    } else {
        res.send({ "msg": "you are not authorised!" })
    }
}

module.exports = {
    auth
}