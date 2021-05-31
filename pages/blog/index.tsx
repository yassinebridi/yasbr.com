import { HomeLayout } from '@layouts';
import { databasesId, getDatabase } from '@lib';
import { BlogPostType, dateFormat, TagType } from '@utils';
import comma from 'comma-number';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface BlogsProps {
  posts: BlogPostType[];
}
const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <HomeLayout>
      <div className="max-w-xl py-3 mx-auto">
        <h2 className="text-3xl font-bold text-center">Blog</h2>
        <p className="px-4 mt-2 text-center dark:text-primary-300 text-primary-600">
          Check out my blog, where i write mostly about web and mobile
          development, startups, and life.
        </p>
        {/* <span className="text-primary-600">{posts.length} posts</span> */}
        <div className="px-4 mt-8">
          {posts.map((post) => (
            <BlogPostCard post={post} />
          ))}
        </div>
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

export interface BlogPostCardProps {
  post: BlogPostType;
}
export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const date = dateFormat(post.Date);
  const router = useRouter();
  return (
    <div
      key={post.id}
      className="p-4 my-4 border-2 border-dashed cursor-pointer dark:border-primary-800 border-primary-100 dark:hover:bg-[#1b1b1f] hover:bg-[#fdfdfd]"
      onClick={() => router.push(`/blog/${post.Slug}`)}
    >
      <h3 className="mt-2">
        <Link href={`/blog/${post.Slug}`}>
          <a className="text-xl font-extrabold dark:text-primary-300 text-primary-800">
            {post.Title}
          </a>
        </Link>
      </h3>
      <p className="mt-1 text-primary-600 dark:text-primary-400">
        {post.Preview}
      </p>
      <div className="flex mt-3 space-x-2">
        {post.TagsField.map((tag) => (
          <Link key={tag.id} href={`/blog/tags/${tag.Slug}`}>
            <a className="px-2 py-1 text-sm dark:bg-primary-800 bg-primary-100">
              #{tag.Name}
            </a>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-sm font-light">
        <p className="">{date}</p>
        <p>{comma(post.Views)} Views</p>
      </div>
    </div>
  );
};
