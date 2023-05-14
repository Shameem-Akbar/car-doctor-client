import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li className="text-xl font-semibold"><Link to="/">Home</Link> </li>
        <li className="text-xl font-semibold"><Link to="/about">About</Link></li>
        {
            user.email && <li className="text-xl font-semibold"><Link to="/bookings">Bookings</Link></li>
        }
        <li className="text-xl font-semibold"><Link to="/services">Services</Link></li>
        <li className="text-xl font-semibold"><Link to="/blog">Blog</Link></li>
        <li className="text-xl font-semibold"><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 py-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" >
                    <img className="w-20" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <button onClick={handleLogOut} className="btn btn-error text-white mr-2">LOG OUT</button>
                    </div> :
                    <div className="navbar-end">
                        <Link to='/login'><button className="btn btn-error text-white mr-2">LOGIN</button></Link>
                        <button className="btn btn-outline btn-error">Appointment</button>
                    </div>

            }

        </div>
    );
};

export default NavBar;