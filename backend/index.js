const express = require('express'); 
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.port || 4500;



app.listen(port,()=>{
    try {
        console.log(`Your server is Running at port ${port}`);
    } catch (error) {
        
    }
})