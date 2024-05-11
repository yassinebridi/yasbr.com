'use client';

import { ComponentDynamicsProjectList } from '@adapters';
import { Project } from '@components';
import clsx from 'clsx';
import React from 'react';

type ProjectKind = 'all' | 'os' | 'client';
export interface ProjectsProps {
  items: ComponentDynamicsProjectList[] | undefined;
}
const Projects: React.FC<ProjectsProps> = ({ items }) => {
  const [selected, setSelected] = React.useState<ProjectKind>('all');

  const handleClick = (type: ProjectKind) => {
    setSelected(type);
  };
  const selectedItems =
    selected === 'all'
      ? items
      : items?.filter((item) => item.type === selected);

  return (
    <div className="py-16 bg-primary-50 dark:bg-primary-800">
      <div className="flex items-center max-w-5xl px-4 mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Portfolio</h3>
            <h2 id="projects" className="text-3xl font-extrabold">
              <a href="#projects" title="projects" className="ringify">
                Recent Works
              </a>
            </h2>
          </div>

          <ul className="flex justify-center mt-6 space-x-10">
            <li>
              <button
                onClick={() => handleClick('all')}
                className={clsx(
                  selected === 'all'
                    ? 'dark:text-primary-50 text-primary-900 underline'
                    : 'dark:text-primary-400 text-primary-500',
                  'rounded-none text-sm font-semibold uppercase ringify'
                )}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('client')}
                className={clsx(
                  selected === 'client'
                    ? 'dark:text-primary-50 text-primary-900 underline'
                    : 'dark:text-primary-400 text-primary-500',
                  'rounded-none text-sm font-semibold uppercase ringify'
                )}
              >
                For Clients
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick('os')}
                className={clsx(
                  selected === 'os'
                    ? 'dark:text-primary-100 text-primary-900 underline'
                    : 'dark:text-primary-400 text-primary-500',
                  'rounded-none text-sm font-semibold uppercase ringify'
                )}
              >
                Open Source
              </button>
            </li>
          </ul>

          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedItems?.map((item, i) => {
                return <Project key={i} projectItem={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
