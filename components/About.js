import React from 'react';
import Image from 'next/image';
import profile from '../public/images/profile.png';

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white font">
            👋 Hi there, I'm Lucas.
          </h1>
          <div className="mt-6 text-gray-900 dark:text-white">
            <p className="mb-4 dark:text-grey">
              I'm a 22 years old front-end developer. As an enthusiast of
              technology, I enjoy the process of problem-solving and learning
              about new things in the software development field.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 mb-10 lg:mt-6 lg:px-4">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={165}
            height={165}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
