const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User")
router.post('/register', async (req, res) => {
    const { firstname,lastname ,  email, password } = req.body; 
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 15)
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.post('/login' , async (req , res) => {
    const {email , password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message : 'user not found'})
        }
        const passwordMatched = bcrypt.compare(password , user.password)
        if(!passwordMatched){
            return res.status(400).json({message : 'password not matched'})
        }
        if(passwordMatched){
            return res.status(201).json({message : "successfull login"})
        }
    }catch(err){}
})
module.exports = router