import { ArrowRightIcon } from '@heroicons/react/outline';
import { originalLoader, ProjectsType } from '@utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ProjectProps {
  projectItem: ProjectsType;
}
const Project: React.FC<ProjectProps> = ({ projectItem }) => {
  return (
    <div className="relative shadow-lg h-44 group">
      <div className="absolute inset-0 z-10 hidden opacity-90 bg-primary-500 group-hover:block" />
      <div className="absolute inset-0 z-10 flex items-center justify-center hidden group-hover:flex">
        <div className="relative flex flex-col text-center">
          <h2 className="font-bold text-white">{projectItem.Name}</h2>
          <p className="text-primary-50">{projectItem.Desc}</p>
          <Link href={`/project/${projectItem.Slug}`}>
            <a className="flex items-center justify-center mt-3 text-sm font-bold text-white underline uppercase space-x-2">
              <span>See Details</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </div>
      <Image
        src={projectItem.Image[0].url}
        layout="fill"
        loader={originalLoader}
        className="filter contrast-200"
      />
    </div>
  );
};

export default Project;
