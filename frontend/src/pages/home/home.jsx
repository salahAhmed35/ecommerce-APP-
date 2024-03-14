import React from 'react';
import Banner from './banner/banner';
import Features from './features/features';
const Home = () => {
    return (
        <>
           <div className="Home">
           <Banner/>
           <Features/>
           </div>
        </>
    );
};
export default Home;