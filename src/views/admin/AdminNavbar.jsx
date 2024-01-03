import React, { useState,useContext } from 'react';
import logo from '../../../src/assets/LOGO.svg';
import { NavLink } from 'react-router-dom'; // Using NavLink for active link
import Modal from './AdminToggleMenu';
import { signOut } from 'firebase/auth';
import { auth } from "./secret.jsx";
import { AuthContext } from "./AuthContext.jsx";

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };
  const handleHome = () => {
    window.location.href = '/admin/home';
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center hover:cursor-pointer" onClick={handleHome}>
            <img src={logo} alt="Logo" className="h-20" />
            <div>
            <h1 className="ml-2 md:text-3xl lg:text-3xl text-lg font-bold text-red_color">JAGDAMBA AND COMPANY</h1>
             <h1 className="ml-2 md:text-md lg:text-md text-sm font-bold text-red_color">Interior Decorators & Turnkey Contractor</h1> 
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="border-4 rounded-lg px-2 pt-2 pb-1  text-red_color  border-red_color border-solid  "
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  fillRule="evenodd"
                  d="M20 3H0V1h20v2zM0 9h20V7H0v2zm20 6H0v-2h20v2z"
                />
              </svg>
            </button>
          </div>
          <div className={`hidden sm:flex items-center space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
            <NavLink
            exact="true"
              to="/admin/home"
              className={({ isActive }) => (isActive ? "text-red_color font-bold  text-xl" : "text-gray-500  hover:text-red_color")}
            >
               Home
            </NavLink>
            <NavLink
              to="/admin/about"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-xl" : "text-gray-500  hover:text-red_color")}
            >
              Team
            </NavLink>
            <NavLink
              to="/admin/factory"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-xl" : "text-gray-500  hover:text-red_color")}
            >
              Factory
            </NavLink>
            <NavLink
              to="/admin/projects"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-xl" : "text-gray-500  hover:text-red_color")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/admin/client"  
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-xl" : "text-gray-500  hover:text-red_color")}
            >
              Client
            </NavLink>
          </div>
          {currentUser && (
          <button onClick={handleLogout}>Logout</button>
        )}
        </div>
      </div>
      <Modal isOpen={isOpen} toggleModal={toggleMenu} />
    </nav>
  );
}

export default AdminNavbar;
