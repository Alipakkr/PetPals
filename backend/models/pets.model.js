const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    price: { type: Number, required: true },
    pettype: { type: String, required: true },
    age: { type: String, required: true },
    about: { type: String, required: true },
    color: { type: String, required: true },
    image: { data: Buffer, contentType: String }
}, {
    versionKey: false
})

const PetModel = mongoose.model('pets', petSchema);

module.exports = {
    PetModel
}