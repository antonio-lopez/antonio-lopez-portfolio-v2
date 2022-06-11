import Head from 'next/head';
import Image from 'next/image';
import { About, Main, Projects } from '../components';

export default function Home() {
  return (
    <div className='min-h-screen layout'>
      <Main />
      <Projects />
      <About />
    </div>
  );
}
