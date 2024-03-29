import React from 'react';
import DealOfWeek from './dealOfWeek/dealOfWeek';
import ProductsContainer from './productsContainer/productsContainer';
const FeaturedProducts = () => {
    return(
        <>
          <div className="featured-products my-6">
            <div className="container m-auto flex items-start justify-start">
                <DealOfWeek />
                <ProductsContainer/>
            </div>
          </div>
        </>
    )
} 

export default FeaturedProducts;