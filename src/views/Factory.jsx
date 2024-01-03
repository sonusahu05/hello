import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import RevealOnScroll from "./components/ScrollAnimation";
import FactoryContent from "./components/FactoryContent";
import ContactForm from "./components/ContactForm";

function Factory() {
  const location = useLocation(); // Get the current location
  useEffect(() => {
    const contactUs = document.getElementById("contactUs");
    if (contactUs) {
      contactUs.classList.add("animate-borders-onload");
    }
  }, [location.pathname]); // Add location.pathname as a dependencyabout

  useEffect(() => {
    const content = document.querySelector(".transform");
    if (content) {
      content.classList.add("translate-x-0");
      content.classList.remove("translate-x-full");
    }
  }, [location.pathname]); // Add location.pathname as a

  return (
    <div>
      <Navbar />
      <div className="relative ">
        <img
          src="../../src/assets/factory.jpg"
          alt="Your Image"
          className="w-full h-[30vh] lg:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out">
          <div id="contactUs" className="relative">
            <div className="backdrop-grayscale-[.5] p-8 sm:p-16 rounded-lg mx-4 sm:mx-auto max-w-3xl w-full">
              <h1 className="text-5xl text-white text-center mb-8 ">
                Factory
              </h1>
              <span className="absolute left-0 top-0 h-0 w-0 border-t-8 border-red_color transition-all delay-500 duration-500 "></span>
              <span className="absolute right-0 top-0 h-0 w-0 border-r-8 border-red_color transition-all delay-1000 duration-500 "></span>
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b-8 border-red_color transition-all delay-1500 duration-500 "></span>
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l-8 border-red_color transition-all delay-2000 duration-500 "></span>
            </div>
          </div>
        </div>
      </div>

      <FactoryContent />

      <div className="hidden">
        <ContactForm />
      </div>


      <BottomNavbar />
    </div>
  );
}

export default Factory;
