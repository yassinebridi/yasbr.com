import type { HomeContent } from '@/data/types';
import Image from 'next/image';
import React from 'react';

export interface HomeProps {
  content: HomeContent;
}
const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <div className="flex flex-col items-center max-w-md px-4 mx-auto sm:max-w-4xl sm:flex-row sm:items-start sm:justify-between sm:space-x-12">
      <div className="w-full mt-8 break-words sm:mt-12">
        <h1 className="text-3xl font-extrabold">{content.heading}</h1>
        <p className="mt-1 text-lg font-light text-primary-600 dark:text-primary-300">
          {content.subheading}
        </p>
        <div className="mt-6 space-y-4 leading-7">
          {content.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <Image
        src={content.image}
        alt={content.heading}
        priority
        className="w-48 mt-8 sm:mt-12 sm:w-64"
      />
    </div>
  );
};

export default Home;
