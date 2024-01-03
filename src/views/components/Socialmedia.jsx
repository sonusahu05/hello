import {  FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
      <div className='flex flex-row justify-center items-center my-4'>
        
        <a href="mailto:jagdamba_com@yahoo.in">
          <div className='text-red-500 text-3xl p-2 transition duration-300 hover:bg-red-500 hover:text-white rounded-full'>
            <FaEnvelope />
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=9324803781">
          <div className='text-green-500 text-3xl p-2 transition duration-300 hover:bg-green-500 hover:text-white rounded-full'>
            <FaWhatsapp />
          </div>
        </a>
        <a href="tel:+91 9324803781">
        <div className='text-red_color_op text-3xl p-2 transition duration-300 hover:bg-red_color_op hover:text-white rounded-full'>
          <FaPhoneAlt />
        </div>
      </a>
      </div>
      <p className="text-gray-800 text-lg">© 2023 Jagdamba & Company. All rights reserved.</p>
    </div>
  );
};

export default SocialMediaIcons;
