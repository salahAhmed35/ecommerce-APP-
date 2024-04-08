import React from 'react';
import AdminSidebar from './adminDashbaordSidebar/sidebar';
import { Outlet } from 'react-router-dom';
const Admin = () => {
    return (
        <React.Fragment>
            <div className="admin h-screen bg-blue flex">
                <AdminSidebar/>
                <div className="admin-content bg-white grow mr-4 my-4 rounded p-4">
                  <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;