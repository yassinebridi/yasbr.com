import { ArrowDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex items-center justify-between w-full text-gray-900 bg-gray-50 px-36">
      <div className="">
        <h3 className="text-primary-500 text-1xl md:text-3xl">Hi, I am</h3>
        <h2 className="text-primary-900 text-2xl font-extrabold md:text-5xl">
          Yassine Bridi
        </h2>
        <p className="mt-2 text-sm font-light md:text-lg">
          Freelance full stack developer
        </p>
        <div className="flex mt-4 space-x-4">
          <Link href="/#contact">
            <a className="flex items-center btn btn-primary btn-lg">
              <span>Contact Me</span>
            </a>
          </Link>
          <Link href="/#projects">
            <a className="flex items-center btn btn-ol-primary btn-lg space-x-2">
              <span>See projects</span>
              <ArrowDownIcon className="w-4 h-4" />
            </a>
          </Link>
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
