import { focusItems, valueItems } from '@data';
import React from 'react';
import List from './List';

export interface IntroductionProps {}
const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div className="flex items-center justify-between max-w-3xl mx-auto mt-28">
      <div className="w-full">
        <div className="font-normal text-center">
          <h3 className="uppercase text-md text-primary-500">My Intro</h3>
          <h2 id="introduction" className="text-3xl font-extrabold">
            <a href="#introduction" title="introduction" className="ringify">
              About Me
            </a>
          </h2>
        </div>

        <div className="mt-8 text-gray-700">
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
