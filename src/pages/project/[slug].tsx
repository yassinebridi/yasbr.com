import { Notion } from '@components';
import { LinkIcon } from '@heroicons/react/20/solid';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks, getPageBySlug } from '@lib';
import { ProjectType } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
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
    <>
      <NextSeo
        title={`${project.Name} Project`}
        description={`Project details of "${project.Name}"`}
        canonical={`https://yasbr.com/project/${project.Url}`}
        openGraph={{
          url: `https://yasbr.com/project/${project.Url}`,
          title: `${project.Name} Project`,
          description: `Project details of "${project.Name}"`,
        }}
      />
      <HomeLayout>
        <article className="max-w-4xl py-3 mx-auto">
          <h1 className="text-4xl font-bold text-center">{project.Name}</h1>
          <h1 className="text-center text-md">{project.Desc}</h1>
          <ul className="flex flex-wrap justify-center px-4 mt-3 overflow-hidden">
            {project.Kind.map((kind, i) => (
              <li
                key={i}
                className="px-3 py-1 m-2 text-sm bg-primary-100 dark:bg-primary-800"
              >
                {kind}
              </li>
            ))}
          </ul>
          <div>
            <ProjectSlider project={project} />
          </div>
          <div className="flex justify-center max-w-3xl mx-4 mt-4 md:mx-auto">
            {project.Short === 'null' ? (
              <div className="flex items-center space-x-2 dark:bg-primary-800 bg-primary-100 px-4 py-1.5 text-sm dark:text-primary-300 text-primary-700">
                <span>UNAVAILABLE</span>
                <LinkIcon className="w-4 h-4" />
              </div>
            ) : (
              <a
                target="_blank"
                href={project.Short}
                className="flex items-center space-x-2 dark:bg-primary-800 bg-primary-100 px-4 py-1.5 text-sm dark:text-primary-300 text-primary-700"
              >
                <span>Visit link</span>
                <LinkIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          <section className="flex max-w-3xl mx-4 my-4 md:mx-auto">
            <Notion blocks={blocks} />
          </section>
        </article>
      </HomeLayout>
    </>
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
