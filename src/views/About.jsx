import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import RevealOnScroll from "./components/ScrollAnimation";
import ClientList from "./components/ClientList";
import Team from "./components/TeamData";
import ContactForm from "./components/ContactForm";

function About() {
  const location = useLocation(); // Get the current location
  const [hoveredIndex, setHoveredIndex] = useState(null);
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


  
  const services = [
    {
      title: "Customer Service",
      details:
        "We understand that it's about you (the client) and not about us. There is no greater satisfaction than being able to deliver to the satisfaction of our client. We work closely with our clients to understand the needs and desire for the project and we make sure that the product is built as per the client's expectation. Many times our experience and know-how has helped us exceed those expectations.",
    },
    {
      title: "Experienced & Skilled Team",
      details:
        "We have a large team of skilled and qualified tradesmen spanning various skills. We have specialists for furniture, furniture carving, polishing, gypsum, hardwood etc. Because of our skilled workforce we have been able to deliver as promised to our customers.",
    },
    {
      title: "Committed to Quality and Timelines",
      details:
        "M/s Jagdamba & Co. has grown its business solely based on the 'Word of mouth' from our clients. Delivery of Quality products and services on time is one of the key foundation of great customer experience. We invest in our clients by providing great service for our future growth.",
    },
    {
      title: "Competitive Pricing",
      details:
        "Customer needs are central to our pricing. We make sure that the methodology adopted to complete the project can deliver in accordance to the needs of the client. Our decades of experience is reflected in our work and we are confident that you will pay only a fair price for our services.",
    },
    {
      title: "Workmanship Warranty",
      details:
        "We make sure that the work is completed without cutting any corners. We ensure that the person who is working on the job understands the Job and is capable of delivering the job. Further, we make sure that the project or product inspected regularly to meet the quality standards. We warrantee our work up to a year if the product does not live up to agreed upon standards.",
    },
    {
      title: "Creative and Open to Challenges",
      details:
        "Every project or job has its share of problems or hurdles. We motivate, encourage, and reward our employees when they are able to resolve or overcome any major hurdle in the project. Problems are seen as opportunities that set us apart from our competition.",
    },
    {
      title: "Proven Track Record",
      details:
        "We started with a mere 3-member team in 1998. Since the beginning, we have made steady growth due to our customers. This reflects our care and commitment to the job we undertake.",
    },
    {
      title: "Mature Business Network",
      details:
        "As a gradual progression, we have developed a thorough understanding of the market and we have developed sound relationships with our suppliers and business partners. Our business network enables us to tap the best resources from the market. Whether it is finding raw materials at reasonable rates or meeting project deadlines, our partners enable us to complete our job to customer satisfaction.",
    },
    {
      title: "Pride in Work",
      details:
        "We take great care and make sure that we don't cut corners while working on a job. We make sure that we deliver the quality we promised. It is a privilege that we have the support of our loyal customers who have been with us due to our services. We strive hard to exceed customer expectations by providing quality service.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="relative ">
        <img
          src="../../src/assets/about.jpg"
          alt="Your Image"
          className="w-full h-[30vh] lg:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out">
          <div id="contactUs" className="relative">
            <div className="backdrop-grayscale-[.5] p-8 sm:p-16 rounded-lg mx-4 sm:mx-auto max-w-3xl w-full">
              <h1 className="text-5xl text-white text-center mb-8 ">
                About Us
              </h1>
              <span className="absolute left-0 top-0 h-0 w-0 border-t-8 border-red_color transition-all delay-500 duration-500 "></span>
              <span className="absolute right-0 top-0 h-0 w-0 border-r-8 border-red_color transition-all delay-1000 duration-500 "></span>
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b-8 border-red_color transition-all delay-1500 duration-500 "></span>
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l-8 border-red_color transition-all delay-2000 duration-500 "></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-6 mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <RevealOnScroll>
                <h1 className="text-4xl lg:text-5xl font-semibold text-red_color mb-4 lg:mb-6">
                  Jagdamba & Company is a well-known identity among the leading
                  Contractors,
                </h1>
              </RevealOnScroll>
            </div>
            <RevealOnScroll>
              <div className="flex flex-col">
                <p className="text-base lg:text-lg leading-relaxed text-gray-800">
                  With a difference in services like Design, Quality, and
                  service. Since inception, we have grown from strength and have
                  a long string of successfully executed projects behind us. We
                  have catered to a wide range of requirements to our clients in
                  well-demarcated areas like Industrial, Residential,
                  Architectural, and Interior Designing. Our vast experience,
                  coupled with our creative strength permits us to develop
                  concepts perfectly matched with the specific requirements of
                  even the most demanding clients.
                </p>
              </div>
            </RevealOnScroll>
          </div>
          <div className=" w-full lg:w-6/12 mx-auto  relative">
            <RevealOnScroll>
              <img
                src="../../src/assets/abt.jpg"
                alt="Your Image"
                className="grayscale mr-6 my-6 lg:ml-6  md:ml-6  w-full   h-[30vh] lg:h-[80vh] object-cover"
              />
            </RevealOnScroll>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="max-w-3xl p-6 bg-red_color bg-opacity-50 text-white  text-center">
                <RevealOnScroll>
                  <h2 className="text-2xl lg:text-4xl font-semibold mb-4 ">
                    INTRODUCTION
                  </h2>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-6 mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className=" w-full lg:w-6/12 mx-auto  mr-10 relative">
            <RevealOnScroll>
              <img
                src="../../src/assets/abt2.jpg"
                alt="Your Image"
                className="grayscale  my-6 lg:ml-6  md:ml-6  w-full mr-10  h-[30vh] lg:h-[80vh] object-cover"
              />
            </RevealOnScroll>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="max-w-3xl p-6 bg-red_color bg-opacity-50 text-white  text-center">
                <RevealOnScroll>
                  <h2 className="text-2xl lg:text-4xl font-semibold mb-4 ">
                    COMPANY PROFILE
                  </h2>
                </RevealOnScroll>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <RevealOnScroll>
                <h1 className="text-4xl lg:text-5xl font-semibold text-red_color mb-4 lg:mb-6">
                  Jagdamba & Co., established in 1998, boasts 17 years of
                  seasoned expertise,
                </h1>
              </RevealOnScroll>
            </div>
            <div className="flex flex-col">
              <RevealOnScroll>
                {" "}
                <p className="text-base lg:text-lg leading-relaxed text-gray-800">
                  earned by catering to diverse clients and projects. Our focus
                  on quality, creativity, and client satisfaction defines us. We
                  excel in enhancing everyday life through our visual,
                  construction, and manufacturing prowess. With a commitment to
                  guaranteed timelines and quality assurance, we've earned trust
                  solely through word of mouth. Our growth strategy involves
                  expanding our infrastructure to serve an increasing clientele.
                  Rather than a client list, we invite you to experience our
                  excellence in TURNKEY and FIT OUT jobs. Our commitment: a
                  one-stop solution for interior fit-out needs. Our success lies
                  in interpreting and realizing the dreams of leading architects
                  and consultants.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mx-auto my-6 mt-10 relative">
        <RevealOnScroll>
          <img
            src="../../src/assets/abt3.jpg"
            alt="Your Image"
            className="w-full h-[60vh] lg:h-[80vh] grayscale object-cover "
          />
        </RevealOnScroll>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="max-w-3xl p-6 bg-red_color bg-opacity-50 text-white  text-center">
            <div className="text-xl lg:text-3xl">
              <RevealOnScroll>
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4 underline">
                  OUR PHILOSOPHY
                </h2>
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                    Two key principle services:
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>Quality of the product.</li>
                    <li>Quality of the service.</li>
                  </ul>
                </div>
                <p className="text-xl lg:text-2xl">
                  With these values, our team focuses all efforts on responding
                  to the needs of our clients with innovative and cost-effective
                  solutions.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
      <div className="text-red_color text-5xl text-center">
        OUR SERVICES
        <div className="container mx-auto px-4 my-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <RevealOnScroll>
              <div
                key={index}
                className="relative bg-white shadow-lg p-6  rounded-lg overflow-hidden transition duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3
                  className={`text-3xl h-[30vh] justify-center text-center font-semibold mb-4 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-base text-white absolute top-0 left-0 right-0 bottom-0 bg-red_color bg-opacity-90 p-4 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {service.details}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <Team/>
      <RevealOnScroll>
        <h1 className="text-4xl text-center lg:text-5xl font-semibold text-red_color mb-4 lg:mb-6">
          Clientele
        </h1>
        <p className="text-lg text-center lg:text-lg mb-10 leading-relaxed text-gray-800">
          We have had the privilege of working with a diverse range of clients,
          including small businesses, startups, and large enterprises. We are
          committed to delivering exceptional solutions tailored to meet the
          unique needs and goals of each client.
        </p>
      </RevealOnScroll>
      <ClientList/>
      <p className="text-lg text-center lg:text-lg mt-10 leading-relaxed text-gray-800">
        And Many More...
      </p>
      <div className="hidden">
        <ContactForm />
      </div>
      <BottomNavbar />
    </div>
  );
}

export default About;
