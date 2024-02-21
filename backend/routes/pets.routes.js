const express = require('express');
const { PetModel } = require('../models/pets.model');

const petsRouter = express.Router();
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: 'petimages',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
}).single('image');

petsRouter.post('/add', (req, res) => {
    upload(req, res, async (err) => {
        try {
            if (err) {
                throw new Error('Error uploading image');
            }

            const { petname, breed, gender, price, age, about } = req.body;
            const pet = new PetModel({
                petname,
                breed,
                gender,
                price,
                age,
                about,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            });
            await pet.save();
            res.send({ "msg": "New pet is added successfully" });
        } catch (error) {
            console.log(err);
            res.status(500).send({ "msg": "Facing error while adding the pet", "error": err });
        }
    });
});

petsRouter.get('/', (req, res) => {
    res.send({ "msg": "getting all the pets" })
});

module.exports = {
    petsRouter
};
