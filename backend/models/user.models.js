const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, required: true, default: 'user' }

}, {
    versionKey: false
})


const UserModel = mongoose.model("Users", userSchema)

module.exports = {
    UserModel
}
