import { Article } from '@adapters';
import Subscribe from '@components/Subscribe';
import { dateFormat } from '@utils/helpers';
import { overridesObj } from '@utils/markdown';
import comma from 'comma-number';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export interface BlogSlugProps {
  post: Article;
}
const BlogSlug: React.FC<BlogSlugProps> = ({ post }) => {
  const date = dateFormat(post.publishedAt);
  return (
    <article className="max-w-3xl py-3 mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex font-light text-md">
          <p className="">{date}</p>
          <span className="mx-1">/</span>
          <p>{comma(post.views!)} Views</p>
        </div>
        <p className="">{}</p>
        <h1 className="text-4xl text-center font-extrabold">{post.title}</h1>
      </div>
      <section className="mt-10 px-6">
        {post.content && (
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
            {post.content}
          </Markdown>
        )}
      </section>
      <div className="px-6 my-10">
        <Subscribe />
      </div>
    </article>
  );
};

export default BlogSlug;
