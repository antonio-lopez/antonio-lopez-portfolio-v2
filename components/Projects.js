import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { projects } from '../constants/projects';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section>
      <article>
        <h1 className='text-2xl md:text-4xl'>Projects</h1>
        <p className='mt-2 text-gray-600'>
          A list of projects showcasing my frontend and backend skills.
        </p>
        <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
          {projects.map((project) => {
            const { title, description, image, stack, repository, demo, id } =
              project;
            return (
              <div
                key={id}
                className='scale-100 rounded-md border transition duration-100 hover:scale-[1.02] hover:border-blue-300 active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100'
              >
                <div className='flex h-full flex-col items-start rounded-md p-4'>
                  <div className='flex w-full items-center justify-between'>
                    <h1>{title}</h1>
                    <div className='flex space-x-2'>
                      <a href={demo} className='hover:text-blue-500'>
                        <BsBoxArrowUpRight />
                      </a>
                      <a href={repository} className='hover:text-blue-500'>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <p className='mb-4 text-sm text-gray-700'>{description}</p>
                  <ul className='flex w-full items-center justify-between  pb-5 text-sm text-gray-700'>
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
                  <div></div>
                  <Link href={demo}>
                    <p className='mt-2 inline-block font-medium'>
                      <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:cursor-pointer hover:bg-blue-200'>
                        More Details →
                      </mark>
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}

          {/* <Link href={'/'}>
            <div className='rounded-md border scale-100 hover:border-blue-300 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100'>
              <div className='flex h-full flex-col items-start rounded-md p-4'>
                <h1>Project Title</h1>
                <p className='mb-4 text-sm text-gray-700'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  voluptas, maiores delectus officia !
                </p>
                <Image
                  src='/screenshot-demo.png'
                  className='mt-3'
                  width={1440}
                  height={792}
                />
                <p className='mt-2 inline-block font-medium'>
                  <mark className='inline-block bg-transparent px-1 pb-2 leading-[0] hover:bg-blue-200'>
                    More Details →
                  </mark>
                </p>
              </div>
            </div>
          </Link>
          <div className='rounded-md border scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100'>
            <div className='flex h-full flex-col items-start rounded-md p-4'>
              <h1>Project Title</h1>
              <p className='mb-auto text-sm text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptas, maiores delectus officia !
              </p>
              <Image src='/screenshot-demo.png' width={1440} height={792} />
              <p className='mt-2 inline-block font-medium'>More Details →</p>
            </div>
          </div>
          <div className='rounded-md border scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100'>
            <div className='flex h-full flex-col items-start rounded-md p-4'>
              <h1>Project Title</h1>
              <p className='mb-auto text-sm text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptas, maiores delectus officia !
              </p>
              <Image src='/screenshot-demo.png' width={1440} height={792} />
              <p className='mt-2 inline-block font-medium'>More Details →</p>
            </div>
          </div>
          <div className='rounded-md border scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100'>
            <div className='flex h-full flex-col items-start rounded-md p-4'>
              <h1>Project Title</h1>
              <p className='mb-auto text-sm text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptas, maiores delectus officia !
              </p>
              <Image src='/screenshot-demo.png' width={1440} height={792} />
              <p className='mt-2 inline-block font-medium'>More Details →</p>
            </div>
          </div>
          <div className='rounded-md border scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100'>
            <div className='flex h-full flex-col items-start rounded-md p-4'>
              <h1>Project Title</h1>
              <p className='mb-auto text-sm text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                voluptas, maiores delectus officia !
              </p>
              <Image src='/screenshot-demo.png' width={1440} height={792} />
              <p className='mt-2 inline-block font-medium'>More Details →</p>
            </div>
          </div> */}
        </div>
      </article>
    </section>
  );
};

export default Projects;
