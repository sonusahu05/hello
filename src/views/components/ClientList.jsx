import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import RevealOnScroll from "./ScrollAnimation";

const ClientList = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const db = getFirestore();
        const clientsCollection = collection(db, "client"); // Replace with your collection name
        const q = query(clientsCollection, orderBy("preference")); // Order by preference field

        const querySnapshot = await getDocs(q);
        const logos = querySnapshot.docs.map((doc) => doc.data().imageUrl); // Assuming logo field stores image URLs

        setClientLogos(logos);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      }
    };

    fetchClientLogos();
  }, []);

  return (
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
  );
};

export default ClientList;
