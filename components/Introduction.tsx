import { Notion } from '@components';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface IntroductionProps {
  blocks: BlockMapType;
}
const Introduction: React.FC<IntroductionProps> = ({ blocks }) => {
  return (
    <div className="flex items-center justify-between max-w-3xl px-4 py-16 mx-auto mt-16 bg-white dark:bg-primary-900">
      <div className="w-full">
        <div className="font-normal text-center">
          <h3 className="uppercase text-md text-primary-500 text-primary-400">
            Intro
          </h3>
          <h2 id="introduction" className="text-3xl font-extrabold">
            <a href="#introduction" title="introduction" className="ringify">
              About Me
            </a>
          </h2>
        </div>

        <div className="mt-6">
          <Notion blocks={blocks} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
