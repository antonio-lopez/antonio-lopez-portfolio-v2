import React from 'react';
import { FaNpm, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';

const About = () => {
  return (
    <section className='py-20' id='about'>
      <h1 className=' text-2xl font-bold dark:text-blue-500 md:text-4xl'>
        <span className='bg-blue-300 dark:bg-transparent'>About</span>
      </h1>
      <div className='grid gap-y-5 md:grid-cols-2'>
        <img
          src='/projects/profile.jpeg'
          alt='profile'
          className='mt-5 h-80 w-auto place-self-center self-center rounded-md ring-4 ring-black hover:ring-blue-500 dark:ring-gray-200 dark:hover:ring-blue-500 md:mt-0'
        />
        <p className='mt-2 text-gray-700 dark:text-gray-300 md:row-start-1'>
          Hello! My name is Antonio Lopez. I'm a full-stack web developer based
          in Orange County, CA. I work in the React.js ecosystem using Next.js
          as my frontend framework of choice and Tailwind CSS for styling. For
          the backend I use Node.js and Express.js when working with APIs along
          Postman for testing and debugging routes. I have used MongoDB and
          Google's Firebase Firestore as the database but have recently starting
          working with content management systems like Sanity.
          <br />
          <br />
          When I'm not staring at my computer screen all day I like to drive to
          different cities and catch live bands playing. I listen to more punk
          genres but enjoy listening to others when I'm in the mood. I frequent
          many craft breweries (hazy IPAs are my favorite), but to keep my diet
          in check I workout and weight lift. I also listen to podcasts, watch
          anime, and read manga. Got any recommendations? Let's grab a pint and
          have a chat!
        </p>
        <div className='grid grid-flow-col grid-rows-2 gap-5 place-self-center self-center pt-8 text-gray-700 dark:text-gray-200 lg:col-span-2 lg:grid-rows-1'>
          <SiReact className='h-10 w-10 hover:text-blue-500 ' />
          <SiNextdotjs className='h-10 w-10 hover:text-blue-500' />
          <SiJavascript className='h-10 w-10 hover:text-blue-500' />
          <FaNpm className='h-10 w-10 hover:text-blue-500' />
          <FaNodeJs className='h-10 w-10 hover:text-blue-500' />
          <FaHtml5 className='h-10 w-10 hover:text-blue-500' />
          <SiCss3 className='h-10 w-10 hover:text-blue-500' />
          <SiTailwindcss className='h-10 w-10 hover:text-blue-500' />
        </div>
      </div>
    </section>
  );
};

export default About;
