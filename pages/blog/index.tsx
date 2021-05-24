import { HomeLayout } from '@layouts';
import { databasesId, getDatabase } from '@lib';
import { BlogPostType, dateFormat, TagType } from '@utils';
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
                  <Link href={`/blog/${post.Slug}`}>
                    <a className="text-3xl font-semibold underline text-primary-800">
                      {post.Title}
                    </a>
                  </Link>
                </h3>
                <p>{post.Preview}</p>
                <div className="flex space-x-2">
                  {post.TagsField.map((tag) => (
                    <Link key={tag.id} href={`/blog/tags/${tag.Slug}`}>
                      <a className="">{tag.Name}</a>
                    </Link>
                  ))}
                </div>

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
  const postsTable = await getDatabase<BlogPostType>(databasesId.posts);
  const tagsTable = await getDatabase<TagType>(databasesId.tags);
  const posts = postsTable
    .filter((post) => post.Published === true)
    .map((post) => {
      const tagsIds = post.Tags;
      const tags = tagsTable.filter((tag) => tagsIds.includes(tag.id));
      post.TagsField = tags;
      return post;
    });

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
