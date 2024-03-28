import React from 'react';
import DealOfWeek from './dealOfWeek/dealOfWeek';

const FeaturedProducts = () => {
    return(
        <>
          <div className="featured-products">
            <div className="container m-auto">
                <DealOfWeek />
            </div>
          </div>
        </>
    )
} 

export default FeaturedProducts;