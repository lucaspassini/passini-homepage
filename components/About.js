import React from 'react';
import Image from 'next/image';
import profile from '../public/images/profile.png';

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
            👋 Hi there, I'm Lucas.
          </h1>
          <div className="mt-6 text-gray-900 dark:text-white">
            <p className="mb-4">
              I'm a 22 years old front-end developer. I'm an enthusiast of
              technology and seeking to learn about new things in the software
              development area.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={130}
            height={130}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
