import React, { useState } from 'react';

const ImageModal = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseEnter = () => {
    // Start slideshow when hovered
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  };

  const handleMouseLeave = () => {
    // Stop slideshow on mouse leave
    setCurrentImage(0);
  };

  return (
    <div className="modal" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentImage]} alt={`Project Image ${currentImage + 1}`} />
    </div>
  );
};

export default ImageModal;
