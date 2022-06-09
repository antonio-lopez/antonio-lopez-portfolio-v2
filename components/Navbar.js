import React from 'react';
import Link from 'next/link';
import { FaRegMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='layout py-5 flex justify-between items-center'>
      <ul className='flex space-x-2 text-sm md:text-base md:space-x-3'>
        <li>
          <Link href={'/'}>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
                Home
              </mark>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
                Projects
              </mark>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
                About
              </mark>
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
                Resume
              </mark>
            </a>
          </Link>
        </li>
      </ul>
      <div className='outline outline-1 p-2 rounded-md outline-slate-300 hover:outline-blue-500 hover:text-blue-500'>
        <FaRegMoon />
      </div>
    </div>
  );
};

export default Navbar;
