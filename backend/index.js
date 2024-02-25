const express = require('express'); 
const cors = require('cors');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const { petsRouter } = require('./routes/pets.routes');
const adminRoute = require('./routes/adminRoute');
require('dotenv').config();
const app = express();

const port = process.env.port || 4500;


app.use(express.json());
app.use(cors())
app.use('/users',userRouter);
app.use('/pets',petsRouter);
app.use('/admin',adminRoute)

app.listen(port,async()=>{
    try {
        await connection;
        console.log('Connected to db....');
        console.log(`Your server is Running at port ${port}`);
    } catch (error) {
        console.log(error);
    }
})