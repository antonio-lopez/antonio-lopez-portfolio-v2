import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <nav className='layout flex items-center justify-between py-5'>
      <ul className='flex space-x-2 text-sm md:space-x-3 md:text-base'>
        <li>
          <Link href='/'>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200 dark:hover:bg-transparent'>
                <span className='dark:text-gray-200 dark:hover:text-blue-500'>
                  Home
                </span>
              </mark>
            </a>
          </Link>
        </li>
        <li>
          <Link href='#projects'>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200 dark:hover:bg-transparent'>
                <span className='dark:text-gray-200 dark:hover:text-blue-500'>
                  Projects
                </span>
              </mark>
            </a>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <a>
              <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200 dark:hover:bg-transparent'>
                <span className='dark:text-gray-200 dark:hover:text-blue-500'>
                  About
                </span>
              </mark>
            </a>
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='rounded-md p-2 ring-1 ring-slate-300 hover:text-blue-500 hover:ring-blue-500 '
      >
        {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
