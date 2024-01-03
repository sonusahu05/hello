import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "./components/ScrollAnimation";
import ClientList from "./components/ClientList";
import ContactForm from "./components/ContactForm";
import ProjectCarousel from "./components/ProjectCarousel";
import FactoryCarousel from "./components/FactoryCarousel";

function Home() {
  const clientLogos = [
    '../../src/assets/client/red chillies.png',
    '../../src/assets/client/L&T.png',
    '../../src/assets/client/Axis-Securities-Logo.jpg',
    '../../src/assets/client/Accenture-Logo-2001.png',
    '../../src/assets/client/videocon.png',
    '../../src/assets/client/mastek.jpg',
    '../../src/assets/client/pizza hut.png',
    '../../src/assets/client/smoke house.jpg',
    '../../src/assets/client/ideaforge.png',
    '../../src/assets/client/tyrocare.png',
    '../../src/assets/client/dlh.jpg',
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const contactUs = document.getElementById("contactUs");
    if (contactUs) {
      contactUs.classList.add("animate-borders-onload");
    }
  }, [location.pathname]); // Add location.pathname as a dependency

  useEffect(() => {
    const content = document.querySelector(".transform");
    if (content) {
      content.classList.add("translate-x-0");
      content.classList.remove("translate-x-full");
    }
  }, [location.pathname]); // Add location.pathname as a

  const handleReadMore = () => {
    navigate("/about");
  };

  const handleProjects = () => {
    navigate("/projects");
  };

  const handleFactory = () => {
    navigate("/factory");
  };

  return (
    <>
      <Navbar />
      <div className="relative ">
        <img
          src="../../src/assets/abt.jpg"
          alt="Your Image"
          className="w-full h-[90vh] lg:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out">
          <div id="contactUs" className="relative">
            <div className="backdrop-grayscale-[.5] p-8 sm:p-16 rounded-lg mx-4 sm:mx-auto max-w-3xl w-full">
              <h1 className="text-5xl text-white text-center mb-8 ">
                JAGDAMBA AND COMPANY <br />
              </h1>
              <p className="text-white text-center text-3xl">
                Interior Decorations & Turnkey Contractors
              </p>
              <span className="absolute left-0 top-0 h-0 w-0 border-t-8 border-red_color transition-all delay-500 duration-500 "></span>
              <span className="absolute right-0 top-0 h-0 w-0 border-r-8 border-red_color transition-all delay-1000 duration-500 "></span>
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b-8 border-red_color transition-all delay-1500 duration-500 "></span>
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l-8 border-red_color transition-all delay-2000 duration-500 "></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between py-8">
            <div className="w-full md:w-1/3">
              <RevealOnScroll>
                <h1 className="text-4xl font-bold mb-4 underline underline-offset-8 decoration-4 text-red_color decoration-gray-800">
                  Welcome to Jagdamba
                </h1>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="flex flex-col mt-16 mb-8">
                  <p className="text-base lg:text-lg leading-relaxed text-gray-800">
                    With a difference in services like Design, Quality, and
                    service. Since inception, we have grown from strength and
                    have a long string of successfully executed projects behind
                    us. We have catered to a wide range of requirements to our
                    clients in well-demarcated areas like Industrial,
                    Residential, Architectural, and Interior Designing. Our vast
                    experience, coupled with our creative strength permits us to
                    develop concepts perfectly matched with the specific
                    requirements of even the most demanding clients.
                  </p>
                </div>
              </RevealOnScroll>
              <button
                className="text-white bg-red_color py-2 text-lg text-end rounded-md  px-4 cursor-pointer hover:bg-red_color_op transition duration-300 ease-in-out	"
                onClick={handleReadMore}
              >
                Read More...
              </button>
            </div>
            <img
              src="../../src/assets/abt3.jpg"
              alt="Image 1"
              className="w-full grayscale md:w-2/3 mt-6 md:mt-0 flex justify-end pl-8 object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>

      <div className="w-full p-8 bg-black ">
        <RevealOnScroll>
          <h1 className="text-5xl text-center font-bold mb-8 underline underline-offset-8 decoration-4 text-white decoration-red_color">
            Our Projects
          </h1>
        </RevealOnScroll>
        <ProjectCarousel />
        <div className="text-end mt-4">
          <button
            onClick={handleProjects}
            className="text-white  bg-red_color py-2 text-lg  rounded-md  px-4 cursor-pointer hover:bg-red_color_op transition duration-300 ease-in-out	"
          >
            View More...
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between py-8">
            <div className="w-full md:w-1/3 justify-center">
              <RevealOnScroll>
                <h1 className="text-5xl font-bold mb-4 underline underline-offset-8 decoration-4 text-red_color decoration-gray-800">
                  Our Clients
                </h1>
              </RevealOnScroll>
            </div>
            <div className="w-full md:w-2/3">
              <div className="container mx-auto px-4 my-6 mt-10">
                <RevealOnScroll>
                  <div className="flex justify-center">
                    <div className="flex flex-wrap -mx-2">
                      {clientLogos.map((logo, index) => (
                        <div
                          key={index}
                          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4 flex justify-center"
                        >
                          <img
                            src={logo}
                            alt={`Client Logo ${index}`}
                            className="max-w-full max-h-24 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="w-full p-8 bg-black ">
        <RevealOnScroll>
          <h1 className="text-5xl text-center font-bold mb-8 underline underline-offset-8 decoration-4 text-white decoration-red_color">
            Our Factory
          </h1>
        </RevealOnScroll>
        <FactoryCarousel />
        <div className="text-end mt-4">
          <button
            onClick={handleFactory}
            className="text-white  bg-red_color py-2 text-lg  rounded-md  px-4 cursor-pointer hover:bg-red_color_op transition duration-300 ease-in-out	"
          >
            View More...
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between py-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 underline underline-offset-8 decoration-4 text-red_color decoration-gray-800">
                Get In Touch
              </h1>
              <ContactForm />
            </div>
            <img
              src="../../src/assets/abt2.jpg"
              alt="Image 1"
              className="w-full grayscale md:w-1/2 mt-6 md:mt-0 flex justify-end pl-8 object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>

      <BottomNavbar />
    </>
  );
}

export default Home;
