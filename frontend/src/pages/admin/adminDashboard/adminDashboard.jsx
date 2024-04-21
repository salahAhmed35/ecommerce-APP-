import React from 'react';
import SalesChart from './salesChart/chart';
import OrdersTable from './ordersTable/orders';
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
const AdminHome = () => {
    const cards = [
    ]
    return (
        <div className="admin-dashboard">
            <div className="container flex flex-wrap justify-between m-auto cards-container" >
            <div className="flex items-center p-2 mr-2 bg-white rounded card w-300 grow">
                <div className="p-3 mx-2 text-white bg-orange-500 border-8 border-orange-100 rounded-full icon">
                    <FaDollarSign className=''/>
                </div>
                <div className='flex flex-col mx-2'>
                    <span className='font-semibold text-gray'>Total Sales</span>
                    <span className="font-bold number ">100,000$</span>
                </div>
            </div>
            <div className="flex items-center p-2 mr-2 bg-white rounded card w-300 grow">
                <div className="p-3 mx-2 text-white bg-green-500 border-8 border-green-100 rounded-full icon">
                    <FaShoppingCart className=''/>
                </div>
                <div className='flex flex-col mx-2'>
                    <span className='font-semibold text-gray'>Total Orders</span>
                    <span className="font-bold number ">3250</span>
                </div>
            </div>
            <div className="flex items-center p-2 bg-white rounded grow card w-300">
                <div className="p-3 mx-2 text-white border-8 rounded-full border-sky-100 bg-sky-500 icon">
                    <FaShoppingBag className=''/>
                </div>
                <div className='flex flex-col mx-2'>
                    <span className='font-semibold text-gray'>Total Products</span>
                    <span className="font-bold number ">320</span>
                </div>
            </div>
            </div>
            <div className='container mx-auto mt-3'>
                <SalesChart/>
            </div>
            <div className='container mx-auto mt-3'>
                <OrdersTable/>
            </div>
            
        </div>
    )
}

export default AdminHome;