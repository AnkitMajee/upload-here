import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {  //async is used to make the function asynchronous so that we can use await inside it
    //console.log(req.body); we will store it into a databse instead of console.log

    const {username, email, password} = req.body;
    if(!username || !email || !password || username === ''|| email===''||password===''){
        next(errorhandler(400,'All fields are required'));
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
        next(error);
    }
};
// we first check if the user exists or not, if not we will throw an error, if the user exists we will compare the password with the hashed password in the database
// if the password matches we will send a response that signin was successful
// if the password does not match we will throw an error
// then we will save the user data in cookies and send a response that signin was successful when they revisit the website
export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password || email === ''|| password===''){
        next(errorhandler(404,'All fields are required'));
    }
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorhandler(404,'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorhandler(400,'Invalid password'));
        }
        const token = jwt.sign(
            {id: validUser._id}, 
            process.env.JWT_SECRET, 
            {expiresIn: '1h'});
        const {pass, ...rest} = validUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
                // maxAge: 3600000,
            }).json(rest);
    } catch(error){
        next(error);
    }
}