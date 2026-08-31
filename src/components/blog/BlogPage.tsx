import type { BlogPost } from '@/data/types';
import Subscribe from '@components/Subscribe';
import { dateFormat } from '@utils/helpers';
import { overridesObj } from '@utils/markdown';
import comma from 'comma-number';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import React from 'react';

export interface BlogSlugProps {
  post: BlogPost;
}
const BlogSlug: React.FC<BlogSlugProps> = ({ post }) => {
  const date = dateFormat(new Date(post.publishedAt));
  return (
    <article className="max-w-3xl py-3 mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex font-light text-md">
          <p className="">{date}</p>
          <span className="mx-1">/</span>
          <p>{comma(post.views)} Views</p>
        </div>
        <h1 className="text-4xl text-center font-extrabold">{post.title}</h1>
      </div>
      <div className="px-6 mt-6">
        <Image
          src={post.cover}
          alt={post.title}
          className="rounded-lg"
          priority
        />
      </div>
      <section className="mt-10 px-6">
        {post.content && (
          <Markdown
            options={{
              overrides: overridesObj,
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
