import type { Project as ProjectData } from '@/data/types';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projectKindMapper = {
  os: 'Open Source',
  client: 'For a Client',
};
export interface ProjectProps {
  projectItem: ProjectData;
}
const Project: React.FC<ProjectProps> = ({ projectItem }) => {
  return (
    <div>
      <div className="relative shadow-lg group">
        {projectItem.images[0] ? (
          <Image
            src={projectItem.images[0].src}
            alt={projectItem.images[0].alt}
            className="object-cover aspect-[5/3]"
          />
        ) : (
          <div className="flex items-center justify-center dark:bg-primary-700 bg-primary-200 aspect-[5/3]">
            <span className="text-sm font-semibold dark:text-primary-300 text-primary-600">
              {projectItem.name}
            </span>
          </div>
        )}
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
