import { focusItems, valueItems } from '@data/introduction';
import React from 'react';
import List from './List';

export interface IntroductionProps {}
const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto max-w-7xl sm:px-6 mt-28">
      <div className="font-normal">
        <h3 className="text-xl text-primary-500 md:text-xl">My Intro</h3>
        <h2 id="introduction" className="text-4xl font-extrabold">
          <a href="#introduction" title="introduction" className="ringify">
            About Me
          </a>
        </h2>

        <div className="text-gray-700">
          <p className="mt-2">Hey, I'm Yassine Bridi 👋</p>

          <p className="mt-2">
            I’m a developer who also designs, with a keen interest in web and
            mobile technology.
          </p>

          <p className="mt-2">
            I enjoy sharing my knowledge and helping others adopt the
            technologies I’m passionate about. I do this by blogging about my
            work, and developing open-source projects.
          </p>
        </div>

        <div className="mt-6">
          <List title="I'm usually focused on:" items={focusItems} />
        </div>

        <div className="mt-6">
          <List title="In my work, I value:" items={valueItems} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
