import { HomeLayout } from '@layouts';
import { databasesId, getDatabase } from '@lib';
import { BlogPostType, dateFormat } from '@utils';
import comma from 'comma-number';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

export interface BlogsProps {
  posts: BlogPostType[];
}
const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <HomeLayout>
      <div className="max-w-xl py-3 mx-auto">
        <h2 className="text-3xl font-bold">Blog</h2>
        <span className="text-gray-600">{posts.length} posts</span>
        <ol>
          {posts.map((post) => {
            const date = dateFormat(post.Date);
            return (
              <li key={post.id} className="p-4 my-4 border-2 border-black">
                <span>{post.Type}</span>
                <h3 className="mt-2">
                  <Link href={`blog/${post.Slug}`}>
                    <a className="text-3xl font-semibold underline text-primary-800">
                      {post.Title}
                    </a>
                  </Link>
                </h3>
                <p>{post.Preview}</p>

                <div className="flex items-center justify-between mt-2">
                  <p className="font-light uppercase">{date}</p>
                  <p>{comma(post.Views)} Views</p>
                </div>
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
  const table = await getDatabase<BlogPostType>(databasesId.blog);
  const posts = table.filter((post) => post.Published === true);

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
