import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/icons/group.svg'
import img2 from '../../../assets/icons/time.svg'
import img3 from '../../../assets/icons/person.svg'
import img4 from '../../../assets/icons/Wrench.svg'
import img5 from '../../../assets/icons/check.svg'
import img6 from '../../../assets/icons/deliveryt.svg'

AOS.init();

const ChooseUs = () => {
    return (
        <div className='mb-16'>
            <div className='text-center space-y-2 mb-8 mt-16'>
                <h3 className='text-3xl text-error font-bold'>Core Features</h3>
                <h2 className='text-5xl font-bold'>Why Choose Us</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='flex justify-center gap-10'>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-right" data-aos-duration="1200">
                    <img className='mx-auto' src={img1} alt="" />
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-right" data-aos-duration="1200">
                    <img className='mx-auto' src={img2} alt="" />
                    <h3 className='font-bold'>Time Delivery</h3>
                </div>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-right" data-aos-duration="1200">
                    <img className='mx-auto' src={img3} alt="" />
                    <h3 className='font-bold'>24/7 Support</h3>
                </div>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-left" data-aos-duration="1200">
                    <img className='mx-auto' src={img4} alt="" />
                    <h3 className='font-bold'>Best Equipment</h3>
                </div>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-left" data-aos-duration="1200">
                    <img className='mx-auto' src={img5} alt="" />
                    <h3 className='font-bold'>100% Guaranty</h3>
                </div>
                <div className='border border-gray-300 p-6 hover:bg-gray-300 hover:text-error cursor-pointer rounded-lg text-center shadow-xl' data-aos="zoom-in-left" data-aos-duration="1200">
                    <img className='mx-auto' src={img6} alt="" />
                    <h3 className='font-bold'>Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;