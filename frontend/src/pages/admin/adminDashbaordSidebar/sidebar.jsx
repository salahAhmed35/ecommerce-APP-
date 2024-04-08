import React, { useEffect, useState } from 'react';
import { NavLink , useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import "./sidebar.css"
const AdminSidebar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const location = useLocation()
    const links = [
        {
            name: "Home",
            icon: <FaHome />,
            path: "/admin/home"
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
        setActiveLink(activeLinkObject.name)
    }, [location.pathname])
    const handleActiveLink = (link) => {
        setActiveLink(link);
    }
    return(
        <div className="sidebar bg-blue w-240 h-full py-3">
            <div className="logo  my-3 px-3">
                <h2 className='text-xl font-bold text-white'>Admin Dashboard</h2>
            </div>
            <ul className='mt-6 pl-4'>
            {links.map((link,index) => (
                <li key={index} className='text-white font-semibold text-xl w-full' onClick={() => handleActiveLink(link.name)}>
                    <NavLink to={link.path}  className={`flex items-center pl-2 py-3 rounded-l ${activeLink=== link.name ? "active" : ""}`} >
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