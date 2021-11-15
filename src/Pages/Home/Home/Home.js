import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Blog from '../Blog/Blog';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Review></Review>
            <Blog></Blog>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;