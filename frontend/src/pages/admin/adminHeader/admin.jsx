import React from 'react';
import { FaBell } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
const AdminHeader = () => {

    
    return (
        <div className="px-4 py-3 ml-1 bg-white admin-header border-l-gray">
            <div className='flex items-center justify-end'>
                <div className="mx-2 text-lg font-bold cursor-pointer mode-converter text-gray">
                    <LuSun />
                </div>
                <div className="mx-2 text-lg font-bold cursor-pointer notification text-gray">
                    <FaBell />
                </div>
                <div className="flex items-center mx-2 text-lg font-bold cursor-pointer user-info text-gray">
                    <div className="avatar"><FaUserCheck /></div>
                    <span className='ml-2 username text-blue'>salah</span>
                </div>
            </div>
        </div>
    )
}
export default AdminHeader