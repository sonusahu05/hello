import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button
        onClick={handleScrollToTop}

        className='p-2 bg-red_color rounded-full text-white fixed bottom-5 right-5 z-50'
      >
        <FaArrowUp />
      </button>
    );
  };
  
  export default ScrollToTopButton;
