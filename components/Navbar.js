import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='layout flex items-center justify-between py-5'>
      <ul className='flex space-x-2 text-sm md:space-x-3 md:text-base'>
        <li>
          <a href='/'>
            <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
              Home
            </mark>
          </a>
        </li>
        <li>
          <a href='#projects'>
            <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
              Projects
            </mark>
          </a>
        </li>
        <li>
          <a href='#about'>
            <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
              About
            </mark>
          </a>
        </li>
        <li>
          <a href='/'>
            <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
              Resume
            </mark>
          </a>
        </li>
      </ul>
      <div className='rounded-md p-2 outline outline-1 outline-slate-300 hover:text-blue-500 hover:outline-blue-500'>
        <FaRegMoon />
      </div>
    </div>
  );
};

export default Navbar;
