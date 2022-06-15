import React from 'react';
import { FaGithub, FaLinkedin, FaRecordVinyl } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id='footer' className='layout pb-4'>
      {/* divider line */}
      <div className='py-4'>
        <div className='w-full border-t border-gray-200'></div>
      </div>
      <div className='flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300'>
        {/* github link */}
        <a
          href='https://github.com/antonio-lopez'
          aria-label='Antonio Lopez github profile'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='h-7 w-7 hover:text-blue-500' />
        </a>
        {/* frontend mentor link */}
        <a
          href='https://www.frontendmentor.io/profile/antonio-lopez'
          aria-label='Antonio Lopez frontend mentor profile'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiFrontendmentor className='h-7 w-7 hover:text-blue-500' />
        </a>
        {/* linkedIn link */}
        <a
          href='https://www.linkedin.com/in/antoniolopez6/'
          aria-label='Antonio Lopez linkedin profile'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='h-7 w-7 hover:text-blue-500' />
        </a>
        {/* Discogs link */}
        <a
          href='https://www.discogs.com/user/la-tonton/collection?header=1'
          aria-label='Antonio Lopez discogs profile'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaRecordVinyl className='h-7 w-7 hover:text-blue-500' />
        </a>
      </div>
      <p className='mt-6 text-center text-sm text-gray-600 dark:text-gray-300'>
        © Antonio Lopez 2022
      </p>
    </footer>
  );
};

export default Footer;
