import React from 'react';
import AdminSidebar from './adminDashbaordSidebar/sidebar';
const Admin = () => {
    return (
        <React.Fragment>
            <div className="admin h-screen">
                <AdminSidebar/>
            </div>
        </React.Fragment>
    )
}

export default Admin;