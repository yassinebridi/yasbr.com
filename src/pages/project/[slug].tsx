import { ComponentDynamicsProjectList, getPortfolioPage } from '@adapters';
import { LinkIcon } from '@heroicons/react/20/solid';
import { HomeLayout } from '@layouts';
import { overridesObj } from '@utils/markdown';
import Markdown from 'markdown-to-jsx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import React from 'react';

const ProjectSlider = dynamic(
  () => {
    return import('../../components/ProjectSlider');
  },
  { ssr: false }
);

export interface ProjectProps {
  project: ComponentDynamicsProjectList | undefined;
}
const Project: React.FC<ProjectProps> = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={`${project.name} Project`}
        description={`Project details of "${project.name}"`}
        canonical={`https://yasbr.com/project/${project.slug}`}
        openGraph={{
          url: `https://yasbr.com/project/${project.slug}`,
          title: `${project.name} Project`,
          description: `Project details of "${project.name}"`,
        }}
      />
      <HomeLayout>
        <article className="max-w-4xl py-3 mx-auto">
          <h1 className="text-4xl font-bold text-center">{project.name}</h1>
          <h1 className="text-center text-md">{project.desc}</h1>
          <div>
            <ProjectSlider project={project} />
          </div>
          <div className="flex justify-center max-w-3xl mx-4 mt-4 md:mx-auto">
            {!project.shortUrl ? (
              <div className="flex items-center space-x-2 dark:bg-primary-800 bg-primary-100 px-4 py-1.5 text-sm dark:text-primary-300 text-primary-700">
                <span>UNAVAILABLE</span>
                <LinkIcon className="w-4 h-4" />
              </div>
            ) : (
              <a
                target="_blank"
                href={project.shortUrl}
                className="flex items-center space-x-2 dark:bg-primary-800 bg-primary-100 px-4 py-1.5 text-sm dark:text-primary-300 text-primary-700"
              >
                <span>Visit link</span>
                <LinkIcon className="w-4 h-4" />
              </a>
            )}
          </div>
          <section className="flex max-w-3xl mx-4 my-4 md:mx-auto">
            {project.content && (
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
                {project.content}
              </Markdown>
            )}
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
  const portfolio = await getPortfolioPage();
  const project = portfolio?.portfolio?.data?.attributes?.Projects?.find(
    (project) => project?.slug === context.params?.slug
  );

  return {
    props: {
      project,
    },
    revalidate: 1,
  };
};
