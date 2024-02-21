const jwt = require('jsonwebtoken');
const { BlacklistModel } = require('../models/blacklist.model');

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    const blacklistedToken = await BlacklistModel.findOne({ "blockedtoken": token });
    if (blacklistedToken) {
        return res.status(401).json({ "msg": "You have been logged out. Please log in again with a different token." });
    } else if (token) {
        try {
            const decoded = jwt.verify(token, "masai");
            if (decoded) {
                req.body.userID = decoded.userID;
                req.body.author = decoded.author;
                next();
            } else {
                res.status(401).json({ "msg": "You are not authorized!" });
            }
        } catch (err) {
            res.status(401).json({ "msg": "You are not authorized!", "error": err.message });
        }
    } else {
        res.status(401).json({ "msg": "You are not authorized!" });
    }
};

module.exports = {
    auth
};
