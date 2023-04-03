import { getPages } from '@adapters';
import { hostname } from '@utils';
import { overridesObj } from '@utils/markdown';
import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'What I use to build things',
  alternates: {
    canonical: `${hostname}/uses`,
  },
};
export default async function PortfolioPage() {
  const { page } = await getData();
  return (
    <div className="max-w-3xl px-6 py-6 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold text-center sm:text-3xl">Uses</h1>
        <p className="mt-2 text-sm text-primary-600 text-center dark:text-primary-300 sm:text-lg">
          I'm frequently asked about the things I use, so here's a complete list
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
  );
}

async function getData() {
  const pages = await getPages({
    filters: {
      slug: { eq: 'uses' },
    },
  });

  const page = pages.pages?.data?.[0].attributes;

  return {
    page,
  };
}
