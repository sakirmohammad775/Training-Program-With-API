import { RxDropdownMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch();
        
       
    }

    const navLink=<>
        <li className="li"><NavLink to='/'>Home</NavLink></li>
        <li className="li"><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li className="li"><NavLink to='/services'>Services</NavLink></li>
        <li className="li"><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className="li"><NavLink to='/contact'>Contact</NavLink></li>
    </>
    
    return (
        <>
            <div className="navbar ">
                <div className="navbar-start">
                    
                    <Link to='/' className="btn btn-ghost text-3xl">S<span className="text-red-500">M</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 ">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?
                         <button onClick={handleLogOut}>SignOut</button>:

                         <Link to='/login' className="btn btn-ghost">Login</Link>
                    }
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