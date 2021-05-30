import { ArrowRightIcon } from '@heroicons/react/outline';
import { cloudinaryLoader, ProjectType } from '@utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projectKindMapper = {
  os: 'Open Source',
  client: 'For a Client',
};
export interface ProjectProps {
  projectItem: ProjectType;
}
const Project: React.FC<ProjectProps> = ({ projectItem }) => {
  return (
    <div>
      <div className="relative h-56 shadow-lg sm:h-48 md:h-44 group">
        <Image
          src={projectItem.Image[0].rawUrl}
          layout="fill"
          className="object-cover"
          loader={cloudinaryLoader}
        />
      </div>
      <div className="flex flex-col px-1 mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{projectItem.Name}</h3>
          <p className="text-sm font-light">
            {projectKindMapper[projectItem.Type]}
          </p>
        </div>
        <Link href={`project/${projectItem.Slug}`}>
          <a className="flex items-center justify-center mt-3 btn btn-ol-primary hover:bg-primary-200 dark:hover:bg-primary-700 dark:bg-primary-900 bg-primary-100 btn-md space-x-2 ringify">
            <span>See More</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Project;
