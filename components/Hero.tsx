import { ArrowDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex items-center justify-between w-full text-gray-900 bg-gray-50 px-36">
      <div className="">
        <h3 className="text-primary-500 text-1xl md:text-3xl">Hi, I am</h3>
        <h2 className="text-2xl font-extrabold md:text-5xl">Yassine Bridi</h2>
        <p className="mt-2 text-sm font-light md:text-lg">
          Web & Mobile developer
        </p>
        <div className="flex space-x-4">
          <button className="mt-4 btn btn-primary btn-lg">Contact Me</button>
          <button className="flex items-center mt-4 btn btn-ol-primary btn-lg space-x-2">
            <span>See projects</span>
            <ArrowDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="">
        <Image
          src="/static/images/avatar.jpeg"
          alt="Yassine Bridi's avatar"
          height={700}
          width={500}
        />
      </div>
    </div>
  );
};

export default Hero;
