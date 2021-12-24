import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';

const Navigation = () => {
  return (
    <div className="top-3 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-transparent">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              'font-light tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white'
            }
          >
            /
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              'font-light tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white'
            }
          >
            /projects
          </a>
        </Link>
        <Link href="/stack">
          <a
            className={
              'font-light tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white'
            }
          >
            /stack
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
