import { originalLoader, SkillsType } from '@utils';
import Image from 'next/image';
import React from 'react';

export interface SkillsProps {
  items: SkillsType[];
}
const Skills: React.FC<SkillsProps> = ({ items }) => {
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
                What I'm good at
              </a>
            </h2>
          </div>

          <div className="mt-8">
            <ul className="grid grid-cols-2 gap-6">
              {items.map((item, i) => {
                return (
                  <li key={i} className="flex items-center">
                    <Image
                      alt={item.Title}
                      src={item.Icon[0].url}
                      loader={originalLoader}
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">{item.Title}</span>
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
