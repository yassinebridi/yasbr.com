import { ComponentDynamicsProjectList } from '@adapters';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';

const projectKindMapper = {
  os: 'Open Source',
  client: 'For a Client',
};
export interface ProjectProps {
  projectItem: ComponentDynamicsProjectList;
}
const Project: React.FC<ProjectProps> = ({ projectItem }) => {
  return (
    <div>
      <div className="relative h-56 shadow-lg sm:h-48 md:h-44 group">
        <img
          src={projectItem.images.data?.[0]?.attributes?.url as any}
          alt={projectItem.name}
          className="object-cover h-56 sm:h-48 md:h-44"
        />
      </div>
      <div className="flex flex-col px-1 mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{projectItem.name}</h3>
          <p className="text-sm font-light">
            {projectKindMapper[projectItem.type]}
          </p>
        </div>
        <Link
          href={`project/${projectItem.slug}`}
          className="flex items-center justify-center mt-3 btn btn-ol-primary hover:bg-primary-200 dark:hover:bg-primary-700 dark:bg-primary-900 bg-primary-100 btn-md space-x-2 ringify"
        >
          <span>See More</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
