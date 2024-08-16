import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-6 text-center'>
        <p className='mb-4'>&copy; 2024 Your Company. All Rights Reserved.</p>
        <div className='flex justify-center space-x-6'>
          <a href='#' className='hover:text-gray-400'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-gray-400'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-gray-400'>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
