import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCloudArrowUp } from "react-icons/fa6";
import Loadingspinner from "../../../../components/loadingspinner/loadingspinner";
import Button from "../../../../components/Button/Button";
const AddNewProduct = () => {
  const categories = [
    { name: "Laptops" },
    { name: "Smartphones" },
    { name: "Tablets" },
    { name: "Smartwatch" },
    { name: "Hardware" },
    { name: "Headphones" },
    { name: "Screens" }
  ];
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const createProduct = async (e) => {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productQuantity,
      productDescription,
      productImage,
      productCategory,
    };
    console.log(productData);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/addNew', productData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct content type
        },
        
      })
      console.log("Product created:", response.data);
    } catch (error) {
      console.error('error', error)
    }finally{
      setLoading(false);
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    console.log(URL.createObjectURL(file));
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container px-4 py-3 mx-auto bg-white">
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
        <div className="flex">
        <div
            className="flex flex-col items-center justify-center p-6 mb-2 cursor-pointer w-40 h-40 rounded-xl bg-[#e2e8f0] text-dark-gray outline-blue upload-image "
            onClick={() => document.querySelector(".upload-input").click()}
          >
            <FaCloudArrowUp className="mx-2 text-4xl " />
            <span className="mt-3 text-xl">Upload</span>
            <input
              type="file"
              className="upload-input"
              hidden
              onChange={handleImage}
              required
            />
          </div>
          <div className="image-container">
          {imagePreview && (
            <img src={imagePreview} alt="Product Preview" className="w-40 h-40 p-2 ml-3 border border-gray-300 rounded-xl" />
          )}
          </div>
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
        <div className="flex flex-row items-center w-full">
          {/* productQuantity */}
          <div className="mb-4 grow">
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
              min={1}
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              required
            />
          </div>
          {/* productCategory */}
          <div className="mb-4 ml-3 grow">
            <label htmlFor="productCategory" className="block font-semibold text-[#1e3a8a]">Product Category</label>
            <select id="poductCategory" value={productCategory} required onChange={(e) => setProductCategory(e.target.value)}>
              <option value="">Select a category</option>
              {categories.map((category,index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
          <div className="flex justify-end">
          <button className="flex justify-center px-4 py-2 my-3 font-semibold text-white rounded w-180 bg-blue" >
           {loading ? <Loadingspinner/> : "Add Product "} 
        </button>
          </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
