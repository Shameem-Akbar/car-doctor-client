import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init();

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service
    return (
        <div className="card card-compact md:w-96 mx-5 md:mx-0 bg-base-100 shadow-xl border border-gray-300" data-aos="zoom-in" data-aos-duration="1200">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl w-[26rem] h-[12rem]" />
            </figure>
            <div className="card-body">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p className="text-xl text-error">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}><button className="btn btn-error text-white">Book Now <FaArrowRight className='ml-2'></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;