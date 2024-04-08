import React from 'react';
import AdminSidebar from './adminDashbaordSidebar/sidebar';
import { Outlet } from 'react-router-dom';
const Admin = () => {
    return (
        <React.Fragment>
            <div className="admin h-screen">
                <AdminSidebar/>
                <div className="admin-content">
                  <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;