import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {  //async is used to make the function asynchronous so that we can use await inside it
    //console.log(req.body); we will store it into a databse instead of console.log

    const {username, email, password} = req.body;
    if(!username || !email || !password || username === ''|| email===''||password===''){
        return res.status(400).json({message: 'All fields are required'});
    }

    const hashedPassword = await bcryptjs.hash(password, 10); //10 is the salt round

    const newuser = new User({
        username, 
        email, 
        password: hashedPassword,
    });
    try{
        await newuser.save(); //awiat is used to wait for the promise to be resolved
        res.json('Signup successful');
    } catch(error){
        res.status(500).json({message: error.message})
    }
};