import { getPages, Page } from '@adapters';
import { HomeLayout } from '@layouts';
import { overridesObj } from '@utils/markdown';
import Markdown from 'markdown-to-jsx';
import { GetStaticProps } from 'next';
import React from 'react';

export interface UsesProps {
  page: Page | undefined;
}
const Uses: React.FC<UsesProps> = ({ page }) => {
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
          {page?.content && (
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
              {page?.content}
            </Markdown>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Uses;

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getPages({
    filters: {
      slug: { eq: 'uses' },
    },
  });

  const page = pages.pages?.data?.[0].attributes;
  return {
    props: {
      page,
    },
    revalidate: 1,
  };
};
