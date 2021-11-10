import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Review></Review>
        </div>
    );
};

export default Home;