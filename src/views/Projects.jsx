import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ProjectCategorySection from "./ProjectCategorySection";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";

import { useLocation } from "react-router-dom";
import ContactForm from "./components/ContactForm";
const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState([]);
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


  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const db = getFirestore();
        const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await getDocs(projectsCollection);

        const projectsArray = [];
        projectsSnapshot.forEach((doc) => {
          projectsArray.push(doc.data());
        });

        setProjectsData(projectsArray);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjectsData();
  }, []);

  // Group projects by categories
  const groupedProjects = {};
  projectsData.forEach((project) => {
    project.categories.forEach((category) => {
      if (!groupedProjects[category]) {
        groupedProjects[category] = [];
      }
      groupedProjects[category].push(project);
    });
  });

  return (
    <>
      <Navbar /> <div className="relative ">
        <img
          src="../../src/assets/projects.jpg"
          alt="Your Image"
          className="w-full h-[30vh] lg:h-[40vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out">
          <div id="contactUs" className="relative">
            <div className="backdrop-grayscale-[.5] p-8 sm:p-16 rounded-lg mx-4 sm:mx-auto max-w-3xl w-full">
              <h1 className="text-5xl text-white text-center mb-8 ">
                Project
              </h1>
              <span className="absolute left-0 top-0 h-0 w-0 border-t-8 border-red_color transition-all delay-500 duration-500 "></span>
              <span className="absolute right-0 top-0 h-0 w-0 border-r-8 border-red_color transition-all delay-1000 duration-500 "></span>
              <span className="absolute bottom-0 right-0 h-0 w-0 border-b-8 border-red_color transition-all delay-1500 duration-500 "></span>
              <span className="absolute bottom-0 left-0 h-0 w-0 border-l-8 border-red_color transition-all delay-2000 duration-500 "></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-6 mt-10 ">
        {Object.keys(groupedProjects).map((category) => (
          <ProjectCategorySection
            key={category}
            category={category}
            projects={groupedProjects[category]}
          />
        ))}
      </div>
      <BottomNavbar />
      <div className="hidden">
        <ContactForm />
      </div>
    </>
  );
};

export default ProjectsList;
