import Link from 'next/link';
import React from 'react';
import ThemeSwitch from '../components/ThemeSwitch';

const Navigation = () => {
  return (
    <div className="z-20 py-10 bg-white top-3 md:py-10 md:mb-10 dark:bg-transparent">
      <div className="container flex items-center justify-between px-4 mx-auto lg:max-w-4xl font-inter">
        <Link href="/">
          <a
            className={
              'font-regular tracking-normal transition-colors text-gray-800 hover:text-sky-500  dark:text-white'
            }
          >
            /
          </a>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
