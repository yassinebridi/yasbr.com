import { Home } from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks } from '@lib';
import { GetStaticProps } from 'next';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface IndexProps {
  homePage: BlockMapType;
}
const Index: React.FC<IndexProps> = ({ homePage }) => {
  return (
    <HomeLayout>
      <div className="py-6">
        <Home blocks={homePage} />
      </div>
    </HomeLayout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await getBlocks(databasesId.sections.home);

  return {
    props: {
      homePage,
    },
    revalidate: 1,
  };
};
