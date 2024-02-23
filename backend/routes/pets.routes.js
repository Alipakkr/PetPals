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

petsRouter.post('/add', auth, async (req, res) => {
    const { name, breed, gender, price, age, pettype, about, color,image } = req.body;
    try {

        const pet = new PetModel({
            name,
            breed,
            gender,
            price,
            age,
            pettype,
            about,
            color,
            image
        });
        await pet.save();
        res.send({ "msg": "New pet is added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ "msg": "Facing error while adding the pet", "error": error });
    }
});

petsRouter.get("/get", async (req, res) => {
    try {
        const { q, gender, age, color, sortBy, breed, sortOrder, page, limit, pettype } = req.query;

        const filter = {};

        // Apply search filters if provided
        if (q) {
            filter.$or = [
                { gender: { $regex: q, $options: "i" } },
                { color: { $regex: q, $options: "i" } },
            ];
        }

        if (gender) {
            filter.gender = { $regex: gender, $options: "i" };
        }
        if (age) {
            filter.age = age;
        }
        if (color) {
            filter.color = { $in: color };
        }
        if (pettype) {
            filter.pettype = { $regex: pettype, $options: "i" };
        }
        if (breed) {
            filter.breed = { $regex: breed, $options: "i" }
        }

        let sort = {};
        if (sortBy && sortOrder) {
            sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
        }

        const pageNumber = parseInt(page) || 1;
        const pageSize = parseInt(limit) || 10;
        const skip = (pageNumber - 1) * pageSize;

        const petsData = await PetModel.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(pageSize);

        const totalPetsCount = await PetModel.countDocuments(filter);

        res.json({ pets: petsData, totalCount: totalPetsCount });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// petsRouter.get('/', auth, async (req, res) => {
//     try {
//         const pets = await PetModel.find();
//         res.send({ "pets": pets })
//     } catch (error) {
//         res.send({ error })
//     }
//     res.send({ "msg": "getting all the pets" })

// });

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
