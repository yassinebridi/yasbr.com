import { webStackItems } from '@data';
import React from 'react';

export interface SkillsProps {}
const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="py-16 bg-primary-50">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">
              Expertise/Skills
            </h3>
            <h2 id="skills" className="text-3xl font-extrabold">
              <a href="#skills" title="skills" className="ringify">
                What i'm good at
              </a>
            </h2>
          </div>

          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-6">
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
