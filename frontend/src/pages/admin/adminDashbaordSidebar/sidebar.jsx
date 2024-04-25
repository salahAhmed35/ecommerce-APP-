import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaBarsProgress } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import "./sidebar.css"
const AdminSidebar = () => {
    const [activeLink, setActiveLink] = useState('dashboard');
    const location = useLocation()
    const links = [
        {
            name: "Dashboard",
            icon: <BsGrid1X2Fill />,
            path: "/admin/dashboard"
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
    useEffect(() => {
        const currentPath = location.pathname
        const activeLinkObject = links.find(link => link.path === currentPath);
        if (activeLinkObject) {
            setActiveLink(activeLinkObject.name)
        }
    }, [location.pathname])
    const handleActiveLink = (link) => {
        setActiveLink(link);
    }
    return (
        <div className="h-full py-3 bg-white sidebar w-240 shadow-dark-shadow">
            <div className="flex flex-row items-center justify-start pl-4 my-3 border-b-gray logo">
                <div className='p-1 mr-2 origin-center origin-left rounded-lg rotate-12 bg-blue shadow-logo-shadow'>
                    <CiLock className='text-xl font-bold text-white ' />
                </div>
                <h2 className='text-xl font-bold text-blue'>Admin</h2>
            </div>
            <ul className='mt-6 text-center'>
                {links.map((link, index) => (
                    <li key={index} className='text-xl font-semibold w-95% text-dark-gray mx-auto' onClick={() => handleActiveLink(link.name)}>
                        <NavLink to={link.path} className={`flex items-center pl-4 py-3 rounded-lg ${activeLink === link.name ? "active" : ""}`} >
                            {link.icon}
                            <span className='ml-2'>{link.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AdminSidebar;