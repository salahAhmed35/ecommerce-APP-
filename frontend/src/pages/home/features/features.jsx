import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
const Features = () =>{
    const features = [
        {featureName : "Discounts " , icon : MdOutlineDiscount},
        {featureName : "Free Delivery" , icon : FaTruckFast},
        {featureName : "Return Product" , icon : TfiReload},
        {featureName : "Order Tracking" , icon : TbMapSearch},
    ]
    return(
        <div className='features'>
            <div className="container mx-auto flex my-4 justify-between">
                {features.map((feature) => (
                    <div className='feature-card flex p-3 w-300 rounded shadow-light-shadow my-3'>
                        <feature.icon className='text-5xl text-blue'/>
                        <span className='ml-4 text text-xl text-dark-gray'>{feature.featureName}</span>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default Features