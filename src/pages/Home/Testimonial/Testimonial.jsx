import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SwiperNavButtons from '../../../components/SwiperNavButtons/SwiperNavButtons';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../../assets/images/customer/player-1.png'
import img2 from '../../../assets/images/customer/player-2.png'
import img3 from '../../../assets/images/customer/player-3.png'
import img4 from '../../../assets/images/customer/player-4.png'
import img5 from '../../../assets/icons/quote2.svg'

AOS.init();

const Testimonial = () => {
    return (
        <div className='mb-8' >
            <div className='text-center space-y-2 mb-8 mt-16'>
                <h3 className='text-3xl text-error font-bold'>Testimonial</h3>
                <h2 className='text-5xl font-bold'>What Customer Says</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>

            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={30}
                modules={[Navigation]}
                className="mySwiper relative"
                data-aos="zoom-in" data-aos-duration="800"
            >
                <SwiperSlide className='bg-base-100 border border-gray-300 py-8 px-8 rounded-lg mb-2'>
                    <div>
                        <div className="flex justify-between">
                            <div className='flex gap-4'>
                                <div className="w-20 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                                    <img src={img1} />
                                </div>
                                <div className='my-auto'>
                                    <h2 className='font-bold text-3xl'>Awlad Hossain</h2>
                                    <h4 className='font-semibold text-lg text-gray-500'>Businessman</h4>
                                </div>
                            </div>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className='mt-3 px-6'>
                        <p className='text-gray-400 text-lg'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                        </p>
                    </div>
                    <div className='flex gap-2 mt-2 px-6'>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 py-8 px-8 rounded-lg mb-2'>
                    <div>
                        <div className="flex justify-between">
                            <div className='flex gap-4'>
                                <div className="w-20 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                                    <img src={img2} />
                                </div>
                                <div className='my-auto'>
                                    <h2 className='font-bold text-3xl'>Awlad Hossain</h2>
                                    <h4 className='font-semibold text-lg text-gray-500'>Businessman</h4>
                                </div>
                            </div>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className='mt-3 px-6'>
                        <p className='text-gray-400 text-lg'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                        </p>
                    </div>
                    <div className='flex gap-2 mt-2 px-6'>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 py-8 px-8 rounded-lg mb-2'>
                    <div>
                        <div className="flex justify-between">
                            <div className='flex gap-4'>
                                <div className="w-20 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                                    <img src={img3} />
                                </div>
                                <div className='my-auto'>
                                    <h2 className='font-bold text-3xl'>Awlad Hossain</h2>
                                    <h4 className='font-semibold text-lg text-gray-500'>Businessman</h4>
                                </div>
                            </div>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className='mt-3 px-6'>
                        <p className='text-gray-400 text-lg'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                        </p>
                    </div>
                    <div className='flex gap-2 mt-2 px-6'>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-base-100 border border-gray-300 py-8 px-8 rounded-lg mb-2'>
                    <div>
                        <div className="flex justify-between">
                            <div className='flex gap-4'>
                                <div className="w-20 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                                    <img src={img4} />
                                </div>
                                <div className='my-auto'>
                                    <h2 className='font-bold text-3xl'>Awlad Hossain</h2>
                                    <h4 className='font-semibold text-lg text-gray-500'>Businessman</h4>
                                </div>
                            </div>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className='mt-3 px-6'>
                        <p className='text-gray-400 text-lg'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable.
                        </p>
                    </div>
                    <div className='flex gap-2 mt-2 px-6'>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                        <FaStar className='text-amber-400 text-3xl'></FaStar>
                    </div>
                </SwiperSlide>

                <div className='absolute bottom-1/2 top-1/2 z-10'>
                    <SwiperNavButtons></SwiperNavButtons>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;