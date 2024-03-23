const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {type : String ,require: true},
    lastname: {type : String ,require: true},
    email: {type:String , require : true , unique:true },
    password: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
    name: {type : String ,require: true},
    description: {type : String ,require: true},
    category: {type : String ,require: true},
    image: [String],
    quantity: {type : Number ,require: true},
    rating: {type : Number ,require: true},
    price: {type : Number ,require: true}, 
})
const User = mongoose.model('User' , userSchema)

module.exports = User