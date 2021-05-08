import { webStackItems } from '@data';
import React from 'react';

export interface SkillsProps {}
const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="py-12 mt-16 bg-primary-50">
      <div className="flex items-center max-w-4xl mx-auto max-w-7xl sm:px-6">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="text-xl text-primary-500 md:text-xl">My Intro</h3>
            <h2 id="skills" className="text-4xl font-extrabold">
              <a href="#skills" title="skills" className="ringify">
                My Expertise/Skills
              </a>
            </h2>
          </div>

          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-4">
              {webStackItems.map((item, i) => {
                return (
                  <li key={i} className="flex items-center">
                    <span className="inline-block mr-2">
                      {typeof item.icon === 'string'
                        ? item.icon
                        : React.createElement(item.icon, { cn: 'h-8 w-8' })}
                    </span>
                    <span>{item.desc}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
