const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname: {type : String ,require: true},
    lastname: {type : String ,require: true},
    email: {type:String , require : true , unique:true },
    password: { type: String, required: true },
    role : {type: String , enum : ['admin','customer'], default : 'customer'}
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
const orderSchema = new mongoose.Schema({
    user_id : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    products: [{
        product_id : { type: mongoose.Schema.Types.ObjectId, ref: 'product'},
        quantity : {type : Number ,require: true} ,
        price : {type : Number ,require: true} ,
    }],
    total_price : {type : Number ,require: true} ,
    order_date : {type : Date ,require: true} ,
})
const reviewSchema = new mongoose.Schema({
    user_id : {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
    product_id : {type: mongoose.Schema.Types.ObjectId, ref : 'Product'},
    rating : {type : Number , require: true},
    review : {type : String}
})
const User = mongoose.model('User' , userSchema)
const Product = mongoose.model('Product', productSchema)
const Order = mongoose.model('Order' , orderSchema)
const Review = mongoose.model('Reveiw' , reviewSchema)


module.exports = User
module.exports = Product