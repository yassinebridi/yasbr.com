import Image from 'next/image';
import React from 'react';

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="">
        <h3 className="font-bold text-1xl md:text-3xl">About</h3>
        <h2 className="text-2xl font-bold md:text-5xl">Yassine Bridi</h2>
        <p className="mt-2 text-sm font-light text-gray-300 md:text-lg">
          Web & mobile developer
        </p>
      </div>

      <div className="">
        <Image
          src="/images/avatar.jpeg"
          alt="Yassine Bridi's avatar"
          height={200}
          width={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
