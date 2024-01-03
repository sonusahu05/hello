import React, { useState, useEffect } from "react";
import { collection, getFirestore, query, getDocs } from "firebase/firestore";
import RevealOnScroll from "./ScrollAnimation";

const FactoryContent = () => {
  const [factories, setFactories] = useState([]);

  useEffect(() => {
    const fetchFactories = async () => {
      const db = getFirestore();
      const factoryCollection = collection(db, "factory");
      const factoryQuery = query(factoryCollection);

      try {
        const querySnapshot = await getDocs(factoryQuery);
        const factoryData = [];
        querySnapshot.forEach((doc) => {
          factoryData.push(doc.data());
        });
        setFactories(factoryData);
      } catch (error) {
        console.error("Error fetching factories:", error);
      }
    };

    fetchFactories();
  }, []);

  const groupedFactories = [];
  for (let i = 0; i < factories.length; i += 2) {
    groupedFactories.push(factories.slice(i, i + 2));
  }

  return (
    <div className="container mx-auto px-4 my-6 mt-10">
      {groupedFactories.map((row, rowIndex) => (
        <RevealOnScroll key={rowIndex}>
          <div className="flex flex-wrap -mx-4 mb-8">
            {row.map((factory, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-4">
                <div className="w-full h-96 md:h-96 lg:h-96">
                  <img
                    src={factory.imageUrl}
                    alt={factory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-red_color mb-2">{factory.title}</h2>
                  <p className="text-base lg:text-lg text-gray-600">{factory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
};

export default FactoryContent;
