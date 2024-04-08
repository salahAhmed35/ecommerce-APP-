import React from 'react';

const AddNewProduct = () => {
    return (
        <div>
            <h1>Add New Product</h1>
            <input type="text" placeholder='Product Name' />
            <input type="text" placeholder='Product Price' />
            <input type="text" placeholder='Product Quantity' />
            <textarea placeholder='description' className=''/>
        </div>
    );
}

export default AddNewProduct;