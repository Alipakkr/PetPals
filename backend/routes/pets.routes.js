const express = require('express');
const { PetModel } = require('../models/pets.model');

const petsRouter = express.Router();
const multer = require('multer');
const { auth } = require('../middlewares/auth.middleware');

const Storage = multer.diskStorage({
    destination: 'petimages',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: Storage
}).single('image');

petsRouter.post('/add', auth, (req, res) => {
    upload(req, res, async (err) => {
        try {
            if (err) {
                throw new Error('Error uploading image');
            }

            const { petname, breed, gender, price, age, pettype, about } = req.body;
            const pet = new PetModel({
                petname,
                breed,
                gender,
                price,
                age,
                pettype,
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

petsRouter.get('/', auth, async (req, res) => {
    try {
        const pets = await PetModel.find();
        res.send({ "pets": pets })
    } catch (error) {
        res.send({ error })
    }
    res.send({ "msg": "getting all the pets" })

});

petsRouter.patch('/update/:Petid', async (req, res) => {
    const { Petid } = req.params;
    try {
        await PetModel.findByIdAndUpdate({ _id: Petid }, req.body);
        res.send({ "msg": `The note with ID:${Petid} has been updated` });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

petsRouter.delete('/remove/:Petid', async (req, res) => {
    const Petid = req.params;
    try {
        await PetModel.findByIdAndDelete({ _id: Petid });
        res.send({ "msg": `the note with id ${Petid} is deleted successfully` })
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" })
    }
})

module.exports = {
    petsRouter
};
