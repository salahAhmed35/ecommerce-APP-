import React from 'react';
import cardImage from '../../assets/cardImage.jpg'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
const ProductCard = () => {
    return (
        <div className="product-card mx-2 mb-2 bg-white rounded shadow-lg cursor-pointer">
            <div className="wish-heart p-2 text-right flex justify-end">
                <FaHeart className='text-2xl text-gray '/>
            </div>
            <div className="product-image p-3">
                <img src={cardImage} alt="" />
            </div>
            <div className="product-details bg-[#f8fafc] p-3">
            <div className="product-price text-lg font-semibold ">320$</div>
            <div className="product-name">
                <p className='text-lg  text-dark-gray '>iphone xxxx</p>
            </div>
            <div className="rating">
                <div className="stars flex mt-2 mb-2">
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-gray-600 text-xl' />
                </div>
            </div>
            <div className="add-to-cart">
                <button className='bg-blue text-white w-full rounded p-2 font-semibold mt-2'>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}
export default ProductCard