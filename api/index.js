import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB', err);
    });
const app= express();

app.get('/', (req, res) => {  
    res.send('Hello World');
}); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
