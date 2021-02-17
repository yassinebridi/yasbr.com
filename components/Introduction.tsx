import { focusItems, valueItems } from '@data/introduction';
import React from 'react';
import List from './List';

export interface IntroductionProps {}
const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div className="text-xl font-normal text-gray-400">
      <h2 id="introduction" className="pt-2 text-3xl font-bold text-white">
        <a href="#introduction" title="introduction">
          Introduction
        </a>
      </h2>

      <p className="mt-2">Hey, I'm Yassine Bridi 👋</p>

      <p className="mt-2">
        I’m a developer who also designs, with a keen interest in web technology
        and video games.
      </p>

      <p className="mt-2">
        I enjoy sharing my knowledge and helping others adopt the technologies
        I’m passionate about. I do this by live streaming my work, reviewing
        community code, developing open-source projects, and writing technical
        blog posts.
      </p>

      <div className="mt-6">
        <List title="I'm usually focused on:" items={focusItems} />
      </div>

      <div className="mt-6">
        <List title="I'm usually focused on:" items={valueItems} />
      </div>
    </div>
  );
};

export default Introduction;
