import React, { useState } from "react";
import axios from "axios";
import { FaArrowUpFromBracket } from "react-icons/fa6";
const AddNewProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // const [productImage , setProductImage] = useState('')
  const [productCategory, setProductCategory] = useState("");
  const createProduct = async (e) => {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productQuantity,
      productDescription,
      // productImage,
      productCategory,
    };
    // const response = await axios.post('http://localhost:3001/addNew' , productData);
    // if(response.status === 201){
    //     console.log(response.data.message);
    // }
  };
  return (
    <div className="px-4 py-3">
      <h1 className="mb-4 text-2xl font-semibold text-blue-700">
        Add New Product
      </h1>
      <form action="submit" onSubmit={createProduct}>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block font-semibold text-[#1e3a8a]"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block font-semibold  text-[#1e3a8a]"
          >
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productQuantity"
            className="block font-semibold text-[#1e3a8a]"
          >
            Product Quantity
          </label>
          <input
            type="number"
            id="productQuantity"
            placeholder="Product Quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block font-semibold text-[#1e3a8a]"
          >
            Description
          </label>
          <textarea
            id="productDescription"
            placeholder="Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div
          className="flex flex-row items-center justify-center p-6 mb-2 cursor-pointer w-fit rounded-xl bg-gray outline-blue upload-image"
          onClick={() => document.querySelector(".upload-input").click()}
        >
          <FaArrowUpFromBracket className="mx-2 text-4xl " />
          <span className="text-xl">upload image</span>
          <input type="file" className="upload-input" hidden />
        </div>
        <button className="px-4 py-2 my-3 font-semibold text-white rounded bg-blue">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
