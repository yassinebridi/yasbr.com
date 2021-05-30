import { imageTransformer, SkillType } from '@utils';
import React from 'react';

export interface SkillsProps {
  items: SkillType[];
}
const Skills: React.FC<SkillsProps> = ({ items }) => {
  return (
    <div className="py-16 bg-primary-50 dark:bg-primary-800">
      <div className="flex items-center max-w-4xl px-4 mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500 text-primary-400">
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
                    <img
                      alt={item.Title}
                      src={imageTransformer(item.Icon[0].rawUrl, 'f_auto')}
                      className="w-[20px] sm:w-[30px]"
                    />
                    <span className="ml-2 text-xs sm:text-sm md:text-md">
                      {item.Title}
                    </span>
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
