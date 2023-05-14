import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import img4 from '../../../assets/images/team/4.jpg'
import img5 from '../../../assets/images/team/5.jpg'
import img6 from '../../../assets/images/team/6.jpg'

import facebook from '../../../assets/icons/facebook.png'
import insta from '../../../assets/icons/insta.png'
import twitter from '../../../assets/icons/twitter.png'
import SwiperNavButtons from '../../../components/SwiperNavButtons/SwiperNavButtons';

AOS.init();

const Team = () => {
    return (
        <div className='mt-8 md:mt-2 mb-5'>
            <div className='text-center space-y-2 mb-8'>
                <h3 className='text-3xl text-error font-bold'>Team</h3>
                <h2 className='text-5xl font-bold'>Meet Our Team</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#FF3811'
                }}
                slidesPerView={3}
                loop={true}
                spaceBetween={30}
                modules={[Navigation]}
                className="mySwiper relative"
                data-aos="fade-up" data-aos-duration="900"
            >
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img1} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>Carroll Shelby</h2>
                        <h4 className='font-semibold text-gray-500'>Automotive Engineer</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img2} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>Lee Iacocca</h2>
                        <h4 className='font-semibold text-gray-500'>Automotive Designer</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img3} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>Danica Patrick</h2>
                        <h4 className='font-semibold text-gray-500'>Auto Mechanic</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img4} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>Ralph Nader</h2>
                        <h4 className='font-semibold text-gray-500'>Automotive Technician</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img5} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>John DeLorean</h2>
                        <h4 className='font-semibold text-gray-500'>Automotive Electrician</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 mb-2 p-4 rounded-lg'>
                    <img className='rounded-lg h-[18rem]' src={img6} alt="" />
                    <div className='mt-2 text-center'>
                        <h2 className='font-bold text-2xl'>Robert Brown</h2>
                        <h4 className='font-semibold text-gray-500'>Engine Expert</h4>
                        <div className='flex justify-center mb-5 mt-2'>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={facebook} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100 mx-2'><img src={insta} alt="" /></button>
                            <button className='btn btn-circle border-error bg-white hover:bg-gray-100'><img src={twitter} alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>

                <div className='absolute bottom-1/2 top-1/2 z-10'>
                    <SwiperNavButtons></SwiperNavButtons>
                </div>
            </Swiper>
        </div>
    );
};

export default Team;