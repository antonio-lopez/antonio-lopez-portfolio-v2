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
    <section className='py-20'>
      <h1 className='text-2xl md:text-4xl'>About</h1>
      <div className='grid gap-y-5 md:grid-cols-2'>
        <img
          src='/profile.jpeg'
          alt='profile'
          className='mt-5 h-80 place-self-center self-center rounded-md text-gray-700 outline outline-4 hover:text-blue-500 md:mt-0'
        />
        <p className='mt-2 text-gray-700 md:row-start-1'>
          Hello! My name is Antonio Lopez. I'm a full-stack web developer based
          in Orange County, CA. I work in the React ecosystem using HTML, CSS,
          and Javascript for the frontend. I have used different types of
          styling methods and frameworks including vanilla CSS 3, Bootstrap, and
          Material UI. The current CSS framework I am using is Tailwind CSS and
          love it. For the backend I use Node.js and Express along with MongoDB
          and Google Firebase's Firestore as the database.
          <br />
          <br />
          When I'm not staring at my computer screen all day I like to drive to
          different cities and catch live bands playing. I listen to more punk
          genres but enjoy listening to others when I'm in the mood. I frequent
          many craft breweries (hazy IPAs are my favorite), listen to podcasts,
          watch anime, and read manga. Got any recommendations? Let's grab a
          pint and have a chat!
        </p>
        <div className='grid grid-flow-col grid-rows-2 gap-5 place-self-center self-center text-gray-700 lg:grid-rows-1'>
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
