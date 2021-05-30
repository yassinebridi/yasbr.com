import { ArrowDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative w-full text-primary-900 dark:bg-primary-800 dark:text-white bg-primary-50">
      <div className="max-w-3xl px-4 pt-12 pb-32 mx-auto sm:py-24">
        <div className="flex flex-col-reverse items-center justify-between w-full sm:flex-row">
          <div className="">
            <h2 className="mt-4 text-3xl font-extrabold text-center md:mt-0 text-black-900 sm:text-left sm:text-4xl md:text-5xl">
              Yassine Bridi
            </h2>
            <p className="mt-2 text-sm font-light text-center sm:text-lg sm:text-left">
              Freelance Full Stack Developer
            </p>
            <div className="flex mt-8 space-x-4">
              <Link href="/contact">
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
            <div className="hidden sm:block">
              <Image
                src="https://media.yasbr.com/upload/f_auto,q_auto/v1622209779/sections/home/me.jpg"
                alt="Yassine Bridi's avatar"
                quality={100}
                height={270}
                width={270}
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src="https://media.yasbr.com/upload/f_auto,q_auto/v1622209779/sections/home/me.jpg"
                alt="Yassine Bridi's avatar"
                quality={100}
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
