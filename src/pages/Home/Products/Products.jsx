import React from 'react';

const Products = () => {
    return (
        <div className='mt-8 md:mt-2'>
            <div className='text-center space-y-2 mb-8'>
                <h3 className='text-3xl text-error font-bold'>Popular Products</h3>
                <h2 className='text-5xl font-bold'>Browse Our Products</h2>
                <p className='text-slate-500'>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='flex justify-center mb-5 mt-8'>
                <button className="btn btn-error btn-outline font-bold">More Products</button>
            </div>
        </div>
    );
};

export default Products;