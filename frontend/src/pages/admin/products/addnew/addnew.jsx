import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowUpFromBracket } from "react-icons/fa6";
const AddNewProduct = () => {
  const categories = [
    { id: 1, name: "Laptops" },
    { id: 2, name: "Smartphones" },
    { id: 3, name: "Tablets" },
    // Add more categories as needed
  ];
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
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

    try {
      const response = await axios.post('http://localhost:3001/addNew', productData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure correct content type
        },
      })
      console.log("Product created:", response.data);
    } catch (error) {
      console.error('error', error)
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
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
        <div className="flex flex-row items-center">
          {/* productQuantity */}
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
          {/* productCategory */}
          <div >
            <label htmlFor="productCategory" className="block font-semibold text-[#1e3a8a]">Product Category</label>
            <select id="poductCategory" >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
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
        <div className="flex ">
          <div
            className="flex flex-row items-center justify-center p-6 mb-2 cursor-pointer w-fit rounded-xl bg-[#e2e8f0] text-dark-gray outline-blue upload-image"
            onClick={() => document.querySelector(".upload-input").click()}
          >
            <FaArrowUpFromBracket className="mx-2 text-4xl " />
            <span className="text-xl">upload image</span>
            <input
              type="file"
              className="upload-input"
              hidden
              onChange={handleImage}
              required
            />
          </div>
          {imagePreview && (
            <img src={imagePreview} alt="Product Preview" className="mb-4 ml-3 rounded" />
          )}
        </div>
        <button className="px-4 py-2 my-3 font-semibold text-white rounded bg-blue">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
