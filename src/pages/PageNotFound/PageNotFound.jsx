import React from 'react';
import image from '../../assets/images/pageNotFound/pageNotFound.svg'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-20 mb-6' src={image} alt="" />
            <Link to='/'>
                <button className='btn btn-outline btn-error text-lg font-bold '><FaArrowLeft className='mt-1 mr-1'></FaArrowLeft>Back To Home</button>
            </Link>
        </div>
    );
};

export default PageNotFound;