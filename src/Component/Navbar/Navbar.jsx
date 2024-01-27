import { RxDropdownMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    const navLink=<>
        <li className="li"><NavLink>Home</NavLink></li>
        <li className="li"><NavLink>Portfolio</NavLink></li>
        <li className="li"><NavLink>Services</NavLink></li>
        <li className="li"><NavLink>Blogs</NavLink></li>
        <li className="li"><NavLink>Contact</NavLink></li>
    </>
    
    return (
        <>
            <div className="navbar static ">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost text-3xl">S<span className="text-red-500">M</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 ">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost">Login</a>
                </div>
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-3xl lg:hidden">
                        <RxDropdownMenu />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLink}
                        </ul>
                    </div>
            </div>
        </>
    );
};

export default Navbar;