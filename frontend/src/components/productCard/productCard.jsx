import React from 'react';
import './productCard.css'
import cardImage from '../../assets/cardImage.jpg'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
const ProductCard = () => {
    return (
        <div className="product-card mb-2 my-2 p-3 bg-white rounded cursor-pointer ">
            <div className="product-name text-center">
                <p className='text-lg font-semibold text-[#172554] text-dark-gray '>iphone xxxx</p>
            </div>
            <div className="product-image p-3 ">
                <img src={cardImage} alt="" />
            </div>
            <div className="product-details p-3">
            <div className="product-price text-lg font-semibold ">320$</div>
            <div className='flex justify-between items-center'>
            <div className="rating">
                <div className="stars flex mt-2 mb-2">
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-yellow-400 text-xl' />
                    <FaStar className='text-gray-600 text-xl' />
                </div>
            </div>
            <div className="cart bg-gray p-2 rounded-full text-white text-lg hover:bg-blue">
                <FaCartShopping className=''/>
            </div>
            </div>
            </div>
        </div>
    )
}
export default ProductCard