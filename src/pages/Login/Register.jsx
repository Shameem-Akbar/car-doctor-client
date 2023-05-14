import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        if (password.length < 6) {
            setError('Password must be 6 characters longer')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserData(result.user, name);
                setSuccess(true);
                form.reset();
                setError('')
                console.log(user);
            })
            .catch(error => { setError(error.message) });
    }

    if (success) {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        setSuccess(false);
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => { console.log('user name updated') })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen place-items-stretch">
            <div className="hero-content flex-col lg:flex-row md:gap-20">
                <div className="w-1/3">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-5/6 md:w-2/3 max-w-lg shadow-2xl bg-base-100 border-error border">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center md:mb-5">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-1">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Your password" className="input input-bordered" required />
                            </div>
                            {
                                error && <div>
                                    <span className='text-red-600'>{error}</span>
                                </div>
                            }
                            <div className='flex mt-2'>
                                <input onClick={handleAccepted} name='accept' type="checkbox" className="checkbox checkbox-sm" />
                                <span className="label-text ml-1.5 font-semibold ">Accept <Link className='underline text-error' to="/terms">Terms and Conditions</Link></span>
                            </div>
                            <div className="form-control mt-4">
                                <input disabled={!accepted} className="btn btn-error text-lg text-white normal-case" type="submit" value="Register" />
                            </div>

                        </form>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                            <span className='px-2 text-slate-500'>OR</span>
                            <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                        </div>
                        <p className='text-center font-semibold'>Sign In with</p>
                        <div className='flex justify-center gap-3'>
                            <button className='btn btn-circle hover:bg-gray-100 bg-gray-100 border-slate-400 text-2xl hover:border-slate-500' type="submit">
                                <FaFacebookF color='#4267B2'></FaFacebookF></button>
                            <button className='btn btn-circle hover:bg-gray-100 bg-gray-100 border-slate-400 hover:border-slate-500 text-2xl' type="submit">
                                <FaLinkedinIn color='#0A66C2'></FaLinkedinIn></button>
                            <button className='btn btn-circle bg-gray-100 text-2xl border-slate-400 hover:bg-gray-100 hover:border-slate-500' type="submit">
                                <FaGoogle color='#4285F4'></FaGoogle></button>

                        </div>
                        <p className='text-center'><small>Already have an account? <span className='text-error font-semibold underline'><Link to='/login'>Login</Link></span> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;