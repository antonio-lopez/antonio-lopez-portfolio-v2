import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const Main = () => {
  return (
    <section className='min-h-main -mt-20 mb-24 flex flex-col justify-center'>
      <h1 className=' text-lg font-bold lg:text-2xl'>Hi, my name is</h1>
      <h2 className=' text-4xl font-bold lg:text-7xl'>Antonio Lopez</h2>
      <p className=' mt-6 text-sm text-gray-700 lg:text-xl'>
        I create interactive UIs one component at a time.
      </p>
      <div className='mt-6 flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-600'>
        {/* resume link */}
        <a
          href='/'
          aria-label='Antonio Lopez resume'
          className='flex space-x-1 hover:text-blue-500'
        >
          <AiOutlineFileText className='h-5 w-5' />
          <span>Resume</span>
        </a>
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
    </section>
  );
};

export default Main;
