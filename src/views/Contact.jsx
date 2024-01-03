import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import RevealOnScroll from "./components/ScrollAnimation";
import ContactForm from "./components/ContactForm";

function Contact() {
  
  useEffect(() => {
    const contactUs = document.getElementById("contactUs");
    if (contactUs) {
      contactUs.classList.add("animate-borders-onload");
    }
  }, []);
  useEffect(() => {
    const content = document.querySelector('.transform');
    if (content) {
      content.classList.add('translate-x-0');
      content.classList.remove('translate-x-full');
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative ">
        <img
          src="../../src/assets/contact2.jpg"
          alt="Your Image"
          className="w-full h-[30vh] lg:h-[40vh] object-cover"
        />
          <div className="absolute inset-0 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out">
            <div id="contactUs" className="relative">
              <div className="backdrop-grayscale-[.5] p-8 sm:p-16 rounded-lg mx-4 sm:mx-auto max-w-3xl w-full">
                <h1 className="text-5xl text-white text-center mb-8 ">
                  Contact Us
                </h1>
                <span className="absolute left-0 top-0 h-0 w-0 border-t-8 border-red_color transition-all delay-500 duration-500 "></span>
                <span className="absolute right-0 top-0 h-0 w-0 border-r-8 border-red_color transition-all delay-1000 duration-500 "></span>
                <span className="absolute bottom-0 right-0 h-0 w-0 border-b-8 border-red_color transition-all delay-1500 duration-500 "></span>
                <span className="absolute bottom-0 left-0 h-0 w-0 border-l-8 border-red_color transition-all delay-2000 duration-500 "></span>
              </div>
            </div>
          </div>
      </div>

      <div className="container mx-auto my-16">
        {/* Image Container */}
        <div className="px-4 mb-16 md:px-0">
          <h2 className="text-5xl text-gray-600 font-bold mb-4 underline underline-offset-8">
            Get in touch
          </h2>
          <div className="flex flex-col md:flex-row lg:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-4 md:w-4/12 lg:w-4/12 border-8 p-4 m-4 border-solid border-red_color">
              <RevealOnScroll>
                <a href="mailto:jagdamba_com@yahoo.in" className="items-center">
                  <div className="text-red-500 text-2xl px-8 py-4 transition duration-300 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-full">
                    <div className="flex flex-row space-x-4">
                      <FaEnvelope />
                      <span>Email Us</span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <a
                  href="https://api.whatsapp.com/send?phone=9324803781"
                  className="items-center"
                >
                  <div className="text-green-500 text-2xl px-8 py-4 transition duration-300 border-2 border-green-500 hover:bg-green-500 hover:text-white rounded-full">
                    <div className="flex flex-row space-x-4">
                      <FaWhatsapp />
                      <span>Whatsapp Us</span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <a href="tel:+91 9324803781" className="items-center">
                  <div className="text-red_color_op text-2xl px-8 py-4 transition duration-300 border-2 border-red_color_op hover:bg-red_color_op hover:text-white rounded-full">
                    <div className="flex flex-row space-x-4">
                      <FaPhoneAlt />
                      <span>Call Us</span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
              <RevealOnScroll>
                <span className="text-gray-800 text-xl font-bold">
                  Phone Number:
                  <a
                    href="tel:+91 9324803781"
                    className="pl-2 items-center hover:text-red_color"
                  >
                    +91 9324803781
                  </a>
                </span>
              </RevealOnScroll>
              <RevealOnScroll>
                <span className="text-gray-800 text-xl font-bold">
                  Email:
                  <a
                    href="mailto:jagdamba_com@yahoo.in"
                    className="pl-2 items-center hover:text-red_color"
                  >
                    jagdamba_com@yahoo.in
                  </a>
                </span>
              </RevealOnScroll>
            </div>

            <div className="hidden md:flex md:flex-col lg:flex lg:flex-col w-1/12"></div>
            <div className="flex flex-col w-full md:w-7/12 lg:w-7/12">
              <h2 className="text-3xl text-red_color font-bold mb-2 underline-offset-8">
                Email Us
              </h2>
             <ContactForm />
            </div>
          </div>
        </div>
        <RevealOnScroll>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row lg:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex md:w-8/12">
                <iframe
                  className="h-96 w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4626587806806!2d72.85655377707484!3d19.26223638552032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f98ec86917%3A0xf5e43012b2636564!2sJyoti%20Industrial%20Estate%2C%20Chhatrapati%20Shivaji%20Rd%20Number%204%2C%20Shakti%20Nagar%2C%20Dahisar%20East%2C%20Mira%20Bhayandar%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1701481958283!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col md:w-4/12 border-8 border-red_color p-4 m-4 text-gray-800">
                <h1 className="text-3xl text-red_color"> Office Address: </h1>
                <p className="text-2xl ml-4 mt-4">
                  Jagdamba And Company, Office no- 106, Jyoti Industrial Estate,
                  Chatrapati Shivaji Complex, Dahisar East, Mumbai
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row lg:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col md:w-4/12 border-8 border-red_color p-4 m-4 text-gray-800">
                <h1 className="text-3xl text-red_color"> Factory Address: </h1>
                <p className="text-2xl ml-4 mt-4">
                  Jagdamba And Company, Gala No. 1, Jyoti Industrial Estate,
                  Chatrapati Shivaji Complex, Dahisar East, Mumbai
                </p>
              </div>
              <div className="flex md:w-8/12">
                <iframe
                  className="h-96 w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4626587806806!2d72.85655377707484!3d19.26223638552032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f98ec86917%3A0xf5e43012b2636564!2sJyoti%20Industrial%20Estate%2C%20Chhatrapati%20Shivaji%20Rd%20Number%204%2C%20Shakti%20Nagar%2C%20Dahisar%20East%2C%20Mira%20Bhayandar%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1701482292475!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <BottomNavbar />
    </div>
  );
}

export default Contact;
