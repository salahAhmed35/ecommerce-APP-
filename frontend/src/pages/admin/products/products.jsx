import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { FaPen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Rating from '../../../components/ratingStarts/rating';
import image from "../../../productsImages/61KZCXmcUxL._AC_UL320_.jpg"
const Products = () => {
    const [products, setProducts] = useState([])
    const getProduct = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products')
            setProducts(response.data)
            console.log(products);
        } catch (error) {
            console.error({ "products": error });
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className="container mx-auto bg-white products">
            <div className="add-new">
                <Link to="/admin/add-new" className='px-6 py-2 font-semibold text-white rounded bg-blue '>Add new product +</Link>
            </div>
            <div className='flex flex-wrap my-3 products-container'>
                <table className='w-full text-left text-gray-500 ptext-sm rtl:text-right dark:text-gray-400'>
                    <thead className=' class="text-xs text-gray-700 bg-white dark:bg-gray-700 d'>
                        <tr className='bg-sky-100'>
                            <th className='class="px-6 py-3 text-base font-semibold p-2'>Image</th>
                            <th className='class="px-6 py-3 text-base font-semibold p-2'>product name</th>
                            <th className='class="px-6 py-3 text-base font-semibold p-2'>price</th>
                            <th className='class="px-6 py-3 text-base font-semibold p-2'>rating</th>
                            <th className='class="px-6 py-3 text-base font-semibold p-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className='text-base font-semibold bg-white dark:bg-gray-500 dark:border-gray-700'>
                                <th className = "p-2 border border-r-gray-100">
                                    <img src={image} alt="" className='w-16' />
                                </th>
                                <th className='p-2 border border-r-gray-100'>{product.name}</th>
                                <th className='p-2 border border-r-gray-100'>{product.price}$</th>
                                <th className='p-2 border border-r-gray-100'>
                                    <Rating/>
                                </th>
                                <th className='p-2 border border-r-gray-100'>
                                    <div className='flex'>
                                    <button className='flex items-center justify-center px-4 py-1 mr-2 border rounded w-fit grow h-fit'>
                                        <FaPen className='text-gray-500' />
                                        <span className='ml-2 font-bold '>Edit</span>
                                    </button>
                                    <button className='flex items-center justify-center px-4 py-1 mr-2 border rounded w-fit grow h-fit'>
                                        <FaRegTrashAlt className='text-red-500' />
                                        <span className='ml-2 font-bold text-red-500'>Edit</span>
                                    </button>
                                    </div>
                                </th>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <Outlet />
        </div>
    )
}

export default Products;