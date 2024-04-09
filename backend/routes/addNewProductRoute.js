const express = require('express')
const router = express.Router()
const Product = require('../models/dbModels')

router.post('/addNew' ,async (req,res) => {
    const {productName, productPrice, productDescription,productQuantity} = req.body
    const newProduct = new Product({productName,productPrice,productDescription,productQuantity})
    await newProduct.save()
    res.status(201).json({message : "product added successfully"})
})

module.exports = router