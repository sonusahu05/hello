// Modal.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialMediaIcons from './Socialmedia';

const CloseIcon = ({ height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-${height} w-${height}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Modal({ isOpen, toggleModal }) {

  
  return (
    <>
      <div>
        <div className={`fixed inset-y-0 z-20 right-0 w-2/3 transition-transform delay-500 duration-500 ease-in-out  bg-white shadow h-full p-8  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleModal} className="absolute h-16 w-16 top-4 right-4 text-red_color  focus:outline-none">
            <CloseIcon /> 
          </button>
          <div className="flex flex-col space-y-4 text-center mt-10">
            <NavLink
              onClick={toggleModal}
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-5xl" : "text-gray-500 text-3xl  hover:text-red_color")}
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleModal}
              to="/about"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-5xl" : "text-gray-500 text-3xl hover:text-red_color")}
            >
              About
            </NavLink>
            <NavLink
              onClick={toggleModal}
              to="/factory"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-5xl" : "text-gray-500 text-3xl hover:text-red_color")}
            >
              Factory
            </NavLink>
            <NavLink
              onClick={toggleModal}
              to="/projects"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-5xl" : "text-gray-500 text-3xl hover:text-red_color")}
            >
              Projects
            </NavLink>
            <NavLink
              onClick={toggleModal}
              to="/contact"
              className={({ isActive }) => (isActive ? "text-red_color font-bold text-5xl" : "text-gray-500 text-3xl hover:text-red_color")}
            >
              Contact
            </NavLink>
            <div className="pt-10">
            <p className='text-red_color text-3xl'>Follow Us</p>
              <SocialMediaIcons />
            </div>
          </div>


        </div>
        <div className={`fixed inset-0 z-10 overflow-hidden transition-transform duration-500 ease-in-out   bg-red_color bg-opacity-50  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={toggleModal}>
        </div>
      </div>
    </>
  );
}

export default Modal;
