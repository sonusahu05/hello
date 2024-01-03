import React,{useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCategorySection = ({ category, projects }) => {
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const settings = {
    dots: true,
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

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImageUrl(null);
    setShowModal(false);
  };

  return (
    <div className="mb-8">
      <h2 className="text-4xl text-center text-red_color font-semibold my-4 underline underline-offset-8 decoration-gray-800 ">{category}</h2>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="mb-8">
          <h3 className="text-2xl text-red_color font-semibold mb-2">{project.projectName}</h3>
          <Slider {...settings}>
            {project.imageUrls.map((imageUrl, imageIndex) => (
              <div key={imageIndex} className="w-full h-96 pr-2 relative">
                <img
                  src={imageUrl}
                  alt={`Project ${project.projectName} Image ${imageIndex + 1}`}
                  className="w-full h-full object-cover rounded-md cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
                  onClick={() => openModal(imageUrl)}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full md:p-64 lg:p-64 p-16  bg-red_color  bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-3/4 max-h-3/4 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={closeModal}
            >
              Close
            </button>
            <img
              src={modalImageUrl}
              alt="Modal"
              className="w-full h-full object-contain border-4 rounded-md border-white "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCategorySection;