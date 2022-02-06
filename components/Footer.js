import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-600  dark:border-white-300 opacity-20"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>💻 Built with Next.js, Tailwind and Vercel.</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://github.com/lucaspassini"
              className={'transition-colors hover:text-gray-500'}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="2em" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucaspassini/"
              className={'transition-colors hover:text-gray-500'}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size="2em" />
            </a>
            <a
              href="https://twitter.com/lucaspassini_"
              className={'transition-colors hover:text-gray-500'}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter size="2em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
