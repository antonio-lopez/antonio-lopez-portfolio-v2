import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { projects } from '../constants/projects';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id='projects' className='pt-20'>
      <article>
        <h1 className='text-2xl font-bold dark:text-blue-500 md:text-4xl'>
          <span className='bg-blue-300 dark:bg-transparent'>Projects</span>
        </h1>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>
          A list of projects showcasing my frontend and backend skills.
        </p>
        <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
          {projects.map((project) => {
            const { title, description, image, stack, repository, demo, id } =
              project;
            return (
              <div
                key={id}
                className='group scale-100 rounded-md border transition duration-100 hover:scale-[1.02] hover:border-blue-300 dark:border-gray-300 dark:hover:border-blue-300'
              >
                <div className='flex h-full flex-col items-start rounded-md p-4'>
                  <div className='flex w-full items-center justify-between'>
                    <h1 className='mt-2 inline-block'>
                      <span className='font-bold  md:text-lg'>
                        <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] group-hover:bg-blue-200 dark:text-gray-200 dark:group-hover:bg-transparent dark:group-hover:text-blue-500'>
                          {title}
                        </mark>
                      </span>
                    </h1>
                    <div className='flex space-x-2'>
                      <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href={demo}
                        className='inline-block hover:text-blue-500'
                      >
                        <BsBoxArrowUpRight />
                      </a>
                      <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href={repository}
                        className='inline-block hover:text-blue-500'
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <p className='mb-4 text-sm text-gray-700 dark:text-gray-300'>
                    {description}
                  </p>
                  <ul className='flex w-full items-center justify-between  pb-5 text-xs text-gray-700'>
                    {stack.map((tag, i) => {
                      return (
                        <li
                          className='rounded-md bg-gray-200 px-1.5 py-0.5'
                          key={i}
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                  <Image
                    src={image}
                    className='mt-3'
                    width={1440}
                    height={792}
                  />
                  {/* <div></div>
                  <Link href={demo}>
                    <p className='mt-2 inline-block font-medium'>
                      <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:cursor-pointer hover:bg-blue-200'>
                        More Details →
                      </mark>
                    </p>
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Projects;
