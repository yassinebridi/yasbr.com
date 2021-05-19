import { ViewCount } from '@components';
import { HomeLayout } from '@layouts';
import { blogDatabaseId, getDatabase } from '@lib';
import { Page } from '@notionhq/client/build/src/api-types';
import { dateFormat } from '@utils';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export type PageExd = Page & {
  slug: string;
  created_time: Date;
  last_edited_time: Date;
};

export interface BlogsProps {
  posts: PageExd[];
}
const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <HomeLayout>
      <div className="max-w-xl py-3 mx-auto">
        <h2 className="text-3xl font-bold">Blog</h2>
        <span className="text-gray-600">{posts.length} posts</span>
        <ol>
          {posts.map((post) => {
            const titleProps = post?.properties.Title as any;
            const title = titleProps.title[0]?.plain_text;
            const slugProps = post?.properties.Slug as any;
            const slug = slugProps.rich_text[0]?.plain_text;
            const date = dateFormat(post.last_edited_time);
            return (
              <li key={post.id}>
                <h3>
                  <Link href={`blog/${slug}`}>
                    <a className="text-3xl font-semibold underline text-primary-800">
                      {title}
                    </a>
                  </Link>
                </h3>

                <ViewCount slug={slug} />
                <p className="font-light uppercase">{date}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </HomeLayout>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const database = await getDatabase(blogDatabaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
