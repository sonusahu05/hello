import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import RevealOnScroll from "./ScrollAnimation";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const db = getFirestore();
        const teamCollection = collection(db, "team");
        const teamQuery = query(teamCollection, orderBy("hierarchy"));

        const querySnapshot = await getDocs(teamQuery);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const renderTeam = () => {
    const hierarchyMap = {};

    // Organize team data by hierarchy
    teamData.forEach((member) => {
      const hierarchy = member.hierarchy;
      if (!hierarchyMap[hierarchy]) {
        hierarchyMap[hierarchy] = [];
      }
      hierarchyMap[hierarchy].push(member);
    });

    // Render team data based on hierarchy
    return Object.keys(hierarchyMap).map((hierarchy) => (
      <div key={hierarchy} className="flex flex-wrap mb-8 justify-center">
        {hierarchyMap[hierarchy].map((member, index) => (
          <div key={index} className="w-full h-1/2 md:w-2/3 lg:w-2/4 px-4 mb-8">
            <RevealOnScroll>
              <div className="shadow hover:shadow-3xl relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-128 object-cover transition-transform duration-500 transform grayscale"
                />
                <div className="absolute top-8 left-8 w-[87%] h-[87%] hover: bg-red-500 bg-opacity-75 p-4  text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                  <h3 className="text-3xl text-center font-bold">
                    {member.name}
                  </h3>
                  <p className="text-2xl text-center">{member.position}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 my-6 mt-10">
      <h1 className="text-4xl text-center lg:text-5xl font-semibold text-red_color mb-4 lg:mb-6">
        Our Team
      </h1>
      <p className="text-lg text-center lg:text-lg mb-10 leading-relaxed text-gray-800">
        We are a team of dedicated professionals, ready to do whatever it takes
        to make your business grow.
      </p>
      {renderTeam()}
    </div>
  );
};

export default Team;
