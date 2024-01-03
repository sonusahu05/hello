import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMediaIcons from '../components/Socialmedia';
import { FaQuoteLeft, FaQuoteRight, FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Assuming FaQuoteLeft and FaQuoteRight are available


const BottomNavbar = () => {
    const [expanded, setExpanded] = useState({});

    const projectsData = {
        'Ongoing Projects': ['ICICI securities', 'Accenture'],
        'Commercial office': [
            'Red Chillies Entertainment',
            'Accenture',
            'ISS',
            'Videocon Industries',
            'Pancard Clubs',
            'Tyrocore',
            'Bricks Arya',
            'Meco Instruments',
            'DLH Pvt. Ltd.',
            'Pharma Chemicals',
            'Axis Securities',
            'Mastek',
            'Ideaforge',
            'L&T',
        ],
        'Residential': [
            'Girnar Chai',
            'DLH',
        ],
        // Add other project categories and their associated projects
        'Hospitality': [
            'Adarsh hotel',
            'Purohit Hotel',
            'TeraPanth bhavan',
        ],
        'Shipping': ['K line'],
        'Retail': ['Craft N culture'],
        'Food': ['Pizzahut', 'smoke house deli, pali hill'],
    };

    const toggleDropdown = (category) => {
        setExpanded((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };
    const handleHome = () => {
        window.location.href = '/';
    }
    return (
        <>
            <footer className="bg-white shadow-up py-4 text-gray-800">
                <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-start ">
                    {/* Logo and About Section */}
                    <div className="lg:flex-auto lg:w-4/12 mb-6 lg:mb-0 mx-4">
                        <h1 className="mb-2 text-red_color text-3xl">About Us</h1>
                        { /*<div className="flex flex-row items-center hover:cursor-pointer" onClick={handleHome}>
                            <img src={logo} alt="Logo" className="h-10" />
                            <div className='flex flex-col'>
                                <h1 className="ml-2 text-xl font-bold text-red_color">JAGDAMBA AND COMPANY</h1>
                                <h1 className="ml-2 text-sm font-bold text-red_color">Interior Decorators & Turnkey Contractor</h1>
                            </div>
                        </div> */}
                        <p className='pl-6'>
                            <FaQuoteLeft className="text-red_color" />
                            Jagdamba & co. is a well-known identity among the leading contractors with a difference in services like design, quality, and service. Since inception, we have grown from strength and have a long string of successfully executed projects behind us. We have catered to a wide range of requirements to our clients in well-demarcated areas like industrial, residential, architectural, and interior designing. Our vast experience, coupled with our creative strength, permits us to develop concepts perfectly matched with the specific requirements of even the most demanding clients.
                            <FaQuoteRight className="text-red_color" />
                        </p>

                    </div>

                    {/* Address and Contact Info */}
                    <div className="lg:flex-auto lg:w-4/12 mb-6  lg:mb-0 mx-4">
                        <div className="mb-4">
                            <h1 className="mb-2 text-red_color  text-3xl">Contact</h1>
                            <h2 className="text-lg font-semibold text-red_color mb-1">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="inline-block mr-2" /> Address
                            </h2>
                            <h1 className='text-red_color font-bold text-md pl-6'>Head Office:</h1>
                            <p className='ml-6'> Jagdamba And Company, Office no- 106, Jyoti Industrial Estate, Chatrapati Shivaji Complex, Dahisar East, Mumbai</p>
                            <h1 className='text-red_color font-bold text-md pl-6'>Factory:</h1>
                            <p className='ml-6'> Jagdamba And Company, Gala No. 1, Jyoti Industrial Estate, Chatrapati Shivaji Complex, Dahisar East, Mumbai</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-red_color mb-1">
                                <FontAwesomeIcon icon={faPhone} className="inline-block mr-2" /> Contact
                            </h2>
                            <a className='ml-6 hover:text-red_color' href="tel:+91 9324803781">+91 9324803781</a>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-red_color mb-1">
                                <FontAwesomeIcon icon={faEnvelope} className="inline-block mr-2" /> Email
                            </h2>
                            <a className='ml-6 hover:text-red_color' href="mailto:jagdamba_com@yahoo.in">jagdamba_com@yahoo.in</a>
                        </div>
                    </div>

        

                    {/* Navigation and Link */}
                    <div className="lg:flex-auto lg:w-2/12 flex flex-col mx-4">
                        <h1 className="mb-2 text-red_color  text-3xl">Explore</h1>
                        <nav className="flex flex-col space-y-2 ">
                            <NavLink
                                exact="true"
                                to="/admin/home"
                                className={({ isActive }) => (isActive ? "text-red_color font-bold text-lg" : " hover:text-red_color")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/admin/about"
                                className={({ isActive }) => (isActive ? "text-red_color font-bold text-lg" : " hover:text-red_color")}
                            >
                                Team
                            </NavLink>
                            <NavLink
                                to="/admin/factory"
                                className={({ isActive }) => (isActive ? "text-red_color font-bold text-lg" : " hover:text-red_color")}
                            >
                                Factory
                            </NavLink>
                            <NavLink
                                to="/admin/projects"
                                className={({ isActive }) => (isActive ? "text-red_color font-bold text-lg" : " hover:text-red_color")}
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/admin/client"
                                className={({ isActive }) => (isActive ? "text-red_color font-bold text-lg" : " hover:text-red_color")}
                            >
                                Client
                            </NavLink>
                            <div>
                                <p className='text-red_color text-md'>Change language</p>
                                <div className="pl-2" id="google_translate_element"></div>
                            </div>
                        </nav>

                    </div>
                </div>
                <SocialMediaIcons />

            </footer>

        </>
    )
};

export default BottomNavbar;
