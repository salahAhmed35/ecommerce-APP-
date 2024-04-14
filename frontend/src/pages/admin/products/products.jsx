import React from 'react';
import { Link , Outlet} from 'react-router-dom';
const Products = () => {
    return (
        <div className="products">
            <div className="add-new">
                <Link to="/admin/add-new" className='bg-[#e2e8f0]  py-2 px-6 font-semibold rounded '>Add new product +</Link>   
            </div>
            
            <Outlet/>
        </div>
    )
}

export default Products;