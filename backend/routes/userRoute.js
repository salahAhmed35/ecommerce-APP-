const express = require('express')
const router = express.Router();
const User = require("../models/User")

router.post("/register" , async (req , res) => {
    try{
        const {firstname,lastname , email, password} = req.body;
        const user = new User({firstname , lastname , email , password})
        await user.save()
        res.status(201).json({message : "User register successfully"})
    }catch(error) {
        res.status(400).json({error : error.message})
    }
})


module.exports = router