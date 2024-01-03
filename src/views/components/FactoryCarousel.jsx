import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FactoryCarousel = () => {
  const categories = [
    { name: "Speedy Press", image: "../../../src/assets/factory/speedy.jpg" },
    { name: "Fine Finishing", image: "../../../src/assets/factory/fine.jpg" },
    { name: "Precision Refinement ", image: "../../../src/assets/factory/precision.jpg" },
    { name: "Perfect Finish", image : "../../../src/assets/factory/perfect.jpg" },
    { name: "Fine Craftsman", image : "../../../src/assets/factory/fine.jpg" },
    { name: "Checking & Packing", image : "../../../src/assets/factory/pack.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {categories.map((category, index) => (
        <div key={index} className="w-full h-128 relative p-8">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0  flex items-center justify-center bg-red_color bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300">
            <p className="text-white text-4xl font-bold">{category.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FactoryCarousel;
