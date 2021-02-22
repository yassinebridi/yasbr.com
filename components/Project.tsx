import { ProjectItem } from '@data/projects';
import React from 'react';
import Image from 'next/image';
import LinkIcon from '@design-system/icons/link';

export interface ProjectProps {
  projectItem: ProjectItem;
}
const Project: React.FC<ProjectProps> = ({ projectItem }) => {
  return (
    <div className="overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:w-1/4 lg:my-1 lg:px-1 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4">
      <Image src={projectItem.image} height={200} width={320} />
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-white text-md sm:text-base md:text-md">
          {projectItem.name}
        </h2>
        <a target="_blank" href={projectItem.url} className="ml-2 text-white">
          <LinkIcon cn="h-5 w-5" />
        </a>
      </div>
      <p className="text-sm sm:text-xs md:text-sm">{projectItem.desc}</p>
    </div>
  );
};

export default Project;
