import { openSourceProjects } from '@data/projects';
import React from 'react';
import Project from './Project';

export interface ProjectsProps {}
const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="text-xl font-normal text-gray-400">
      <h2 id="projects" className="text-3xl font-bold text-white">
        <a href="#projects" title="projects">
          Projects
        </a>
      </h2>

      <h3 id="openSource" className="mt-4 text-xl font-bold text-white">
        <a href="#openSource" title="openSource">
          Open Source
        </a>
      </h3>

      <div className="flex flex-wrap justify-center mt-3 mb-4 overflow-hidden sm:mb-0 sm:-mx-2 md:-mx-px lg:-mx-1 xl:-mx-2">
        {openSourceProjects.map((item) => {
          return <Project projectItem={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
