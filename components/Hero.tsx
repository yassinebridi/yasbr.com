import { ArrowDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative w-full text-gray-900 bg-gray-50">
      <div className="max-w-3xl py-24 mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <h2 className="text-2xl font-extrabold text-black-900 md:text-5xl">
              Yassine Bridi
            </h2>
            <p className="mt-2 text-sm font-light md:text-lg">
              Freelance Full Stack Developer
            </p>
            <div className="flex mt-8 space-x-4">
              <Link href="#contact">
                <a className="flex items-center btn btn-primary btn-lg">
                  <span>Contact Me</span>
                </a>
              </Link>
              <Link href="#projects">
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
              quality={100}
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
