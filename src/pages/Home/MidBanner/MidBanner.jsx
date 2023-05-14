import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import calendar from '../../../assets/icons/calendar.png'
import call from '../../../assets/icons/call.png'
import location from '../../../assets/icons/location.png'


AOS.init();

const MidBanner = () => {
    return (
        <div className='flex justify-around mb-16 bg-black p-16 rounded-lg mt-16' data-aos="fade-up" data-aos-duration="800">
            <div className='flex'>
                <img src={calendar} width={"56rem"} alt="" />
                <div className='my-auto ml-3 text-white'>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex'>
                <img src={call} width={"56rem"} alt="" />
                <div className='my-auto ml-3 text-white'>
                    <p>Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex'>
                <img src={location} width={"56rem"} alt="" />
                <div className='my-auto ml-3 text-white'>
                    <p>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>

        </div>
    );
};

export default MidBanner;