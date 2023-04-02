import { ArticleEntity, getArticles, GetArticlesQuery } from '@adapters';
import { HomeLayout } from '@layouts';
import { dateFormat } from '@utils';
import comma from 'comma-number';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface BlogsProps {
  posts: GetArticlesQuery;
}
const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="Blog Posts"
        canonical="https://yasbr.com/blog"
        openGraph={{
          title: 'Blog',
          description: 'Blog Posts',
          url: 'https://yasbr.com/blog',
        }}
      />
      <HomeLayout>
        <div className="max-w-xl py-3 mx-auto">
          <h2 className="text-3xl font-bold text-center">Blog</h2>
          <p className="px-4 mt-2 text-center dark:text-primary-300 text-primary-600">
            Check out my blog, where i write mostly about web and mobile
            development, startups, and life.
          </p>
          {/* <span className="text-primary-600">{posts.length} posts</span> */}
          <div className="px-4 mt-8">
            {posts.articles?.data.map((post) => (
              <BlogPostCard key={post.attributes?.slug} post={post as any} />
            ))}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getArticles();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export interface BlogPostCardProps {
  post: ArticleEntity;
}
export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const date = dateFormat(post?.attributes?.publishedAt);
  const router = useRouter();
  return (
    <div
      className="p-4 my-4 border-2 border-dashed cursor-pointer dark:border-primary-800 border-primary-200 dark:hover:bg-primary-800 hover:bg-primary-50"
      onClick={() => router.push(`/blog/${post?.attributes?.slug}`)}
    >
      <h3 className="mt-2">
        <Link
          href={`/blog/${post?.attributes?.slug}`}
          className="text-xl font-extrabold dark:text-primary-300 text-primary-800"
        >
          {post.attributes?.title}
        </Link>
      </h3>
      <p className="mt-1 text-primary-600 dark:text-primary-400">
        {post.attributes?.desc}
      </p>

      <div className="flex items-center justify-between mt-4 text-sm font-light">
        <p className="">{date}</p>
        <p>{comma(post.attributes?.views)} Views</p>
      </div>
    </div>
  );
};
