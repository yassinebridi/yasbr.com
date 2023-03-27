import { Page } from '@adapters';
import { overridesObj } from '@utils/markdown';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export interface HomeProps {
  page: Page;
}
const Home: React.FC<HomeProps> = ({ page }) => {
  return (
    <div className="flex items-center justify-between max-w-md px-4 sm:max-w-4xl mx-auto">
      <div className="w-full break-words dark:prose-invert dark mt-12">
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
      </div>
    </div>
  );
};

export default Home;
