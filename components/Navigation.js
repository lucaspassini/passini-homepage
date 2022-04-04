import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';
import { AiFillHome } from 'react-icons/ai';

const Navigation = () => {
  return (
    <div className="z-20 py-10 bg-white top-3 md:py-12 md:mb-12 dark:bg-transparent">
      <div className="container flex items-center px-6 mx-auto lg:max-w-4xl">
        <div className="container flex items-center justify-start space-x-6">
          <Link href="/">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline dark:hover:bg-dark inline-block px-2 py-2 bg-white/0 hover:bg-gray-900/5 rounded-full'
              }
            >
              <AiFillHome />
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline dark:hover:bg-dark inline-block px-3 bg-white/0 hover:bg-gray-900/5 rounded-full'
              }
            >
              about
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline dark:hover:bg-dark inline-block px-3 bg-white/0 hover:bg-gray-900/5 rounded-full'
              }
            >
              projects
            </a>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
