import { Notion } from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks, getPageBySlug } from '@lib';
import { ProjectType } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { BlockMapType } from 'react-notion';

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
      <div>
        <Head>
          <title>{project.Name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <article className="max-w-4xl py-3 mx-auto">
          <h1 className="text-4xl font-bold">{project.Name}</h1>
          <div className="flex space-x-3"></div>
          <section className="mt-4">
            <Notion blocks={blocks} />
          </section>
        </article>
      </div>
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
