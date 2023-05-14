import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import MidBanner from '../MidBanner/MidBanner';
import Products from '../Products/Products';
import Team from '../Team/Team';
import ChooseUs from '../ChooseUs/ChooseUs';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MidBanner></MidBanner>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;