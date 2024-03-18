const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {type : String ,require: true},
    lastname: {type : String ,require: true},
    email: {type:String , require : true , unique:true },
    password: { type: String, required: true }
});

const User = mongoose.model('Use' , userSchema)

module.exports = User