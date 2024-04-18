const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')
const Product = require("../models/dbModels");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "productsImages/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addNew", upload.single("productImage") ,async (req, res) => {

  const { productName, productPrice, productDescription, productQuantity  } = req.body;
  const productImage = req.file.path;
  const newProduct = new Product({
    name : productName,
    description:productDescription,
    price: productPrice,
    quantity: productQuantity,
    image : productImage
  });
  await newProduct.save();
  res.status(201).json({ message: "product added successfully" });
});

module.exports = router;
