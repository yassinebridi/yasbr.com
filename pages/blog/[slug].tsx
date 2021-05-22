import { Notion } from '@components';
import { HomeLayout } from '@layouts';
import { databasesId, getBlocks, getBlogPost, updatePage } from '@lib';
import { BlogPostType, dateFormat } from '@utils';
import comma from 'comma-number';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface BlogPostProps {
  post: BlogPostType;
  blocks: BlockMapType;
}
const BlogPost: React.FC<BlogPostProps> = ({ post, blocks }) => {
  if (!post || !blocks) {
    return <div />;
  }
  const date = dateFormat(post.Date);
  return (
    <HomeLayout>
      <div>
        <Head>
          <title>{post.Title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <article className="max-w-3xl py-3 mx-auto">
          <p className="font-light uppercase">{date}</p>
          <p>{comma(post.Views)} Views</p>
          <p className="font-light uppercase">{}</p>
          <h1 className="text-4xl font-bold">{post.Title}</h1>
          <div className="flex space-x-3">
            {post.Authors.map((author) => (
              <div key={author.id} className="flex items-center space-x-2">
                <Image
                  src={author.profilePhoto}
                  alt="Yassine Bridi's avatar"
                  loader={(loader) => loader.src}
                  height={23}
                  width={23}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-800 leading-3">
                  {author.fullName}
                </span>
              </div>
            ))}
          </div>
          <section className="mt-4">
            <Notion blocks={blocks} />
          </section>
        </article>
      </div>
    </HomeLayout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await getBlogPost(databasesId.blog, slug as string);
  const blocks = await getBlocks(post.id);

  await updatePage({
    page_id: post.id,
    properties: { Views: { number: post.Views + 1 } },
  });

  return {
    props: {
      post,
      blocks,
    },
    revalidate: 1,
  };
};
