import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';

const Navigation = () => {
  return (
    <div className="z-20 py-10 bg-white top-3 md:py-12 md:mb-12 dark:bg-transparent font-regular font-firacode">
      <div className="container flex items-center px-6 mx-auto lg:max-w-4xl">
        <div className="container flex justify-start space-x-6">
          <Link href="/">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline sm:dark:hover:bg-dark rounded-md sm:inline-block sm:bg-white/0 sm:hover:bg-gray-900/5 sm:rounded-full'
              }
            >
              /
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline sm:dark:hover:bg-dark rounded-md sm:inline-block sm:px-5 sm:bg-white/0 sm:hover:bg-gray-900/5 sm:rounded-full'
              }
            >
              about
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                'tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white dark:hover:text-white no-underline sm:dark:hover:bg-dark rounded-md sm:inline-block sm:px-5 sm:bg-white/0 sm:hover:bg-gray-900/5 sm:rounded-full'
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
