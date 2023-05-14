import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service_id: _id,
            service: title,
            price: price,
            message
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Service booked successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className='text-center text-3xl my-5'><span className='font-bold text-error'>Book Service:</span> {title} </h2>
            <div className="card-body rounded-md mb-5 bg-gray-100 p-16">
                <form onSubmit={handleBookService}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input name='name' defaultValue={user?.displayName} type="text" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Date</span>
                            </label>
                            <input required name='date' type="date" placeholder="Date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input name='email' type="text" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Total Amount</span>
                            </label>
                            <input name='phone' readOnly type="text" defaultValue={"$" + price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="label">
                            <span className="label-text text-base font-semibold">Message</span>
                        </label>
                        <textarea name='message' placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w" ></textarea>
                    </div>
                    <div className="form-control mt-4">
                        <input className="btn btn-error btn-block text-white" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;