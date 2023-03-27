import { getPages, Page } from '@adapters';
import { Home } from '@components';
import { HomeLayout } from '@layouts';
import { GetStaticProps } from 'next';
import React from 'react';

export interface IndexProps {
  homePage: Page;
}
const Index: React.FC<IndexProps> = ({ homePage }) => {
  return (
    <HomeLayout>
      <div className="py-6">
        <Home page={homePage} />
      </div>
    </HomeLayout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const home = await getPages({
    filters: { slug: { eq: 'home' } },
  });

  return {
    props: {
      homePage: home?.pages?.data[0].attributes,
    },
    revalidate: 1,
  };
};
