import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/Navbar';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-48'><progress className="progress progress-error w-56"></progress></div>
    }
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;