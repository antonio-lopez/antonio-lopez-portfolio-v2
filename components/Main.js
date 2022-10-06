import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <section className='min-h-main grid items-center justify-center md:grid-cols-2'>
      <div>
        <h1 className=' text-lg font-bold dark:text-gray-200 lg:text-2xl'>
          Hi, my name is
        </h1>
        <h2 className='relative text-4xl font-bold dark:text-blue-500 lg:text-7xl'>
          Antonio Lopez
        </h2>
        <p className=' mt-6 text-sm text-gray-700 dark:text-gray-200 lg:text-xl'>
          I create simple and functional interactive user interfaces, one
          component at a time.
        </p>
        <div className='mt-6 flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400'>
          {/* github link */}
          <a
            href='https://github.com/antonio-lopez'
            aria-label='Antonio Lopez github profile'
            className='flex space-x-1 hover:text-blue-500'
          >
            <FaGithub className='h-5 w-5' />
            <span>@antonio-lopez</span>
          </a>
          {/* linkedIn link */}
          <a
            href='https://www.linkedin.com/in/antoniolopez6/'
            aria-label='Antonio Lopez linkedin profile'
            className='flex space-x-1 hover:text-blue-500'
          >
            <FaLinkedin className='h-5 w-5' />
            <span>@antoniolopez6</span>
          </a>
        </div>
      </div>
      {/* hero image */}
      <img src='/main-hero.svg' alt='hero' />
    </section>
  );
};

export default Main;
