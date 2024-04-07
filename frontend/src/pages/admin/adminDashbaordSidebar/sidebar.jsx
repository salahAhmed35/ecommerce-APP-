import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const AdminSidebar = () => {
    const links = [
        {
            name: "Home",
            icon: <FaHome />,
            path: "/"
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
                    <NavLink to={link.path} className='flex items-center ' activeClassName = "active">
                        {link.icon }
                        <span className='ml-2'>{link.name}</span>
                    </NavLink>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default AdminSidebar;