import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location?.state || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row md:gap-20">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-error border">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center md:mb-5">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Password</span>
                                    <div className='flex justify-between'>
                                        <p className='uppercase font-semibold underline text-sm text-error mr-2' onClick={() => setShow(!show)}><small>
                                            {
                                                show ? <span>Hide</span> : <span>Show</span>
                                            }
                                        </small></p>

                                    </div>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="Your password" className="input input-bordered" />
                                <div className='flex justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <input type="checkbox" className="checkbox checkbox-sm" />
                                            <span className="label-text ml-1.5 font-semibold">Remember me</span>
                                        </label>
                                    </div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-error underline font-semibold">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-error text-lg text-white normal-case" type="submit" value="Login" />
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
                        <p className='text-center'><small>Don&apos;t have an account? <span className='text-error font-semibold underline'>
                            <Link to='/register' state={from}>Register</Link>
                        </span></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;