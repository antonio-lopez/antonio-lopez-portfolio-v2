import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className='layout pb-4'>
      {/* divider line */}
      <div className='py-4'>
        <div className='w-full border-t border-gray-200'></div>
      </div>
      <div className='flex items-center justify-center space-x-4 text-gray-600'>
        {/* github link */}
        <a
          href='https://github.com/antonio-lopez'
          aria-label='Antonio Lopez github profile'
        >
          <FaGithub className='h-7 w-7 hover:text-blue-500' />
        </a>
        {/* linkedIn link */}
        <a
          href='https://www.linkedin.com/in/antoniolopez6/'
          aria-label='Antonio Lopez linkedin profile'
        >
          <FaLinkedin className='h-7 w-7 hover:text-blue-500' />
        </a>
      </div>
      <p className='mt-6 text-center text-sm text-gray-600'>
        © Antonio Lopez 2022
      </p>
    </footer>
  );
};

export default Footer;
