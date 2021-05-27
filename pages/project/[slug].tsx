import { Notion } from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks, getPageBySlug } from '@lib';
import { ProjectType } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { BlockMapType } from 'react-notion';

const ProjectSlider = dynamic(
  () => {
    return import('../../components/ProjectSlider');
  },
  { ssr: false }
);

export interface ProjectProps {
  project: ProjectType;
  blocks: BlockMapType;
}
const Project: React.FC<ProjectProps> = ({ project, blocks }) => {
  if (!project || !blocks) {
    return <div />;
  }

  return (
    <HomeLayout>
      <article className="max-w-4xl py-3 mx-auto">
        <h1 className="text-4xl font-bold text-center">{project.Name}</h1>
        <h1 className="text-center text-md">{project.Desc}</h1>
        <ul className="flex justify-center mt-3 space-x-3">
          {project.Kind.map((kind, i) => (
            <li
              key={i}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-primary-800"
            >
              {kind}
            </li>
          ))}
        </ul>
        <div>
          <ProjectSlider project={project} />
        </div>
        <section className="mt-4">
          <Notion blocks={blocks} />
        </section>
      </article>
    </HomeLayout>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const project = await getPageBySlug<ProjectType>(
    databasesId.sections.projects,
    slug as string
  );

  const blocks = await getBlocks(project.id);

  return {
    props: {
      project,
      blocks,
    },
    revalidate: 1,
  };
};
