import { HomeLayout } from '@layouts';
import { blogDatabaseId, getDatabase } from '@lib';
import { Page } from '@notionhq/client/build/src/api-types';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export type PageExd = Page & {
  created_time: Date;
  last_edited_time: Date;
};

export interface BlogsProps {
  posts: PageExd[];
}
const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <HomeLayout>
      <div>
        <h2>All Posts</h2>
        <ol>
          {posts.map((post) => {
            const titleProps = post?.properties.Title as any;
            const title = titleProps.title[0]?.plain_text;
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              }
            );
            return (
              <li key={post.id}>
                <h3>
                  <Link href={`blog/${post.id}`}>
                    <a className="text-red-600">{title}</a>
                  </Link>
                </h3>

                <p>{date}</p>
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
