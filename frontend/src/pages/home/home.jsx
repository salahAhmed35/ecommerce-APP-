import React from 'react';
import Banner from './banner/banner';
import Features from './features/features';
import FeaturedProducts from '../../components/featuredProducts/featuredProducts';
const Home = () => {
    return (
        <>
           <div className="Home">
           <Banner/>
           <Features/>
           <FeaturedProducts/>
           </div>
        </>
    );
};
export default Home;