import React, { useState } from 'react';
import AdminSidebar from './adminDashbaordSidebar/sidebar';
import { Outlet } from 'react-router-dom';
import AdminHeader from './adminHeader/admin';
import axios from 'axios';

const Admin = () => {
    const [products, setProducts] = useState([])
    const getProduct = async () => {

    }
    return (
        <React.Fragment>
            <div className="flex h-screen admin bg-light-gray">
                <AdminSidebar />
                <div className='flex flex-col w-full'>
                    <AdminHeader />
                    <div className="p-4 my-4 mr-4 rounded admin-content grow">
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;