import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-8 md:mt-2'>
            <div className='text-center space-y-2 mb-8'>
                <h3 className='text-3xl text-error font-bold'>Our Services</h3>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='text-slate-500'>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mb-5 mt-8'>
                <button className="btn btn-error btn-outline font-bold">More Services</button>
            </div>
        </div>
    );
};

export default Services;