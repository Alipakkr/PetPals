const express = require('express'); 
const cors = require('cors');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const { petsRouter } = require('./routes/pets.routes');
require('dotenv').config();
const app = express();

const port = process.env.port || 4500;


app.use(express.json());
app.use('/users',userRouter);
app.use('/pets',petsRouter);

app.listen(port,async()=>{
    try {
        await connection;
        console.log('Connected to db....');
        console.log(`Your server is Running at port ${port}`);
    } catch (error) {
        console.log(error);
    }
})