import { Notion } from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks } from '@lib';
import { GetStaticProps } from 'next';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface UsesProps {
  blocks: BlockMapType;
}
const Uses: React.FC<UsesProps> = ({ blocks }) => {
  return (
    <HomeLayout>
      <div className="max-w-3xl px-6 py-6 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-center sm:text-3xl">Uses</h1>
          <p className="mt-2 text-sm text-primary-600 text-center dark:text-primary-300 sm:text-lg">
            I'm frequently asked about the things I use, so here's a complete
            list
          </p>
        </div>

        <div className="mt-8">
          <Notion blocks={blocks} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Uses;

export const getStaticProps: GetStaticProps = async () => {
  const blocks = await getBlocks(databasesId.sections.uses);

  return {
    props: {
      blocks,
    },
    revalidate: 1,
  };
};
