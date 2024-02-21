const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    petname: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    price: { type: Number, required: true },
    age: { type: Number, required: true },
    about: { type: String, required: true }
}, {
    versionKey: false
})

const PetModel = mongoose.model('pets', petSchema);

module.exports = {
    PetModel
}