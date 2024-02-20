const express = require('express'); 
const cors = require('cors');
const { connection } = require('./config/db');
require('dotenv').config();
const app = express();

const port = process.env.port || 4500;



app.listen(port,async()=>{
    try {
        await connection;
        console.log('Connected to db....');
        console.log(`Your server is Running at port ${port}`);
    } catch (error) {
        console.log(error);
    }
})