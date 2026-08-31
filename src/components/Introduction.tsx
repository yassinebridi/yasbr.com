import type { PortfolioIntro } from '@/data/types';
import React from 'react';

export interface IntroductionProps {
  intro: PortfolioIntro;
}
const Introduction: React.FC<IntroductionProps> = ({ intro }) => {
  return (
    <div className="flex items-center justify-between max-w-3xl px-4 py-16 mx-auto mt-16 bg-white dark:bg-primary-900">
      <div className="w-full">
        <div className="font-normal text-center">
          <h3 className="uppercase text-md text-primary-500 ">Intro</h3>
          <h2 id="introduction" className="text-3xl font-extrabold">
            <a href="#introduction" title="introduction" className="ringify">
              About Me
            </a>
          </h2>
        </div>

        <div className="mt-6 space-y-4 leading-7">
          <p className="font-semibold">{intro.greeting}</p>
          {intro.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="pt-2 space-y-2">
            {intro.focusAreas.map((focusArea) => (
              <li key={focusArea}>{focusArea}</li>
            ))}
          </ul>

          <ul className="flex flex-wrap justify-center gap-2 pt-2">
            {intro.coreValues.map((coreValue) => (
              <li key={coreValue} className="px-3 py-1 text-sm">
                {coreValue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
