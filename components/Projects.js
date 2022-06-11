import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <section>
      <article>
        <h1 className='text-2xl md:text-4xl'>Projects</h1>
        <p className='mt-2 text-gray-600'>
          A list of projects showcasing my frontend skills.
        </p>
        <div className='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {/* card */}
          <Link href={'/'}>
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
          {/* card */}
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
          {/* card */}
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
          {/* card */}
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
          {/* card */}
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
        </div>
      </article>
    </section>
  );
};

export default Projects;
