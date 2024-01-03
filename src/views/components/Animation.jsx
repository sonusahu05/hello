import { useEffect } from 'react';

const AnimatedContent = ({ children }) => {
  useEffect(() => {
    const contactUs = document.getElementById("contactUs");
    if (contactUs) {
      contactUs.classList.add("animate-borders-onload");
    }
  }, []);
  useEffect(() => {
    const content = document.querySelector('.transform');
    if (content) {
      content.classList.add('translate-x-0');
      content.classList.remove('translate-x-full');
    }
  }, []);

  return children;
};

export default AnimatedContent;
