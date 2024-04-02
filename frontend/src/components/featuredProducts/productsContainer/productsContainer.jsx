import React from 'react';
import ProductCard from "../../productCard/productCard"
const ProductsContainer = () => {
    return (
        <div className="products-container flex justify-between flex-wrap p-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
} 

export default ProductsContainer