import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB', err);
    });


const app= express();
app.use(express.json());
app.use('/api/user',userRoutes); 
app.use('/api/auth',authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
