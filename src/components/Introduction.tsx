import { overridesObj } from '@utils/markdown';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export interface IntroductionProps {
  content: string | undefined;
}
const Introduction: React.FC<IntroductionProps> = ({ content }) => {
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

        <div className="mt-6">
          {content && (
            <Markdown
              options={{
                overrides: overridesObj,
                createElement(type, props, children) {
                  return (
                    <React.Fragment>
                      {React.createElement(type, props, children)}
                    </React.Fragment>
                  );
                },
                forceBlock: true,
              }}
            >
              {content}
            </Markdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
