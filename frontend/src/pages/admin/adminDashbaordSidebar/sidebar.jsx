import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
const AdminSidebar = () => {
    const links = [
        {
            name: "Home",
            icon: <FaHome />,
            path: "/admin"
        },
        {
            name: "Orders",
            icon: <FaBarsProgress />,
            path: "/admin/orders"
        },
        {
            name: "Products",
            icon: <FaShop />,
            path: "/admin/products"
        },
        {
            name: "Settings",
            icon: <FaGear />,
            path: "/admin/settings"
        },
    ]
    return(
        <div className="sidebar bg-blue w-240 h-full py-3">
            <div className="logo  my-3 px-3">
                <h2 className='text-xl font-bold text-white'>Admin Dashboard</h2>
            </div>
            <ul className='mt-6 pl-4'>
            {links.map((link,index) => (
                <li key={index} className='text-white pl-2 py-3 font-semibold text-xl w-full rounded-l-full'>
                    <a href="#" className='flex items-center '>
                        <span className='mr-2'>{link.name}</span>
                        {link.icon }
                    </a>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default AdminSidebar;