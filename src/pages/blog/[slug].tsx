import { Article, getArticles, updateArticle } from '@adapters';
import { Subscribe } from '@components';
import { HomeLayout } from '@layouts';
import { dateFormat, imageTransformer } from '@utils';
import { overridesObj } from '@utils/markdown';
import comma from 'comma-number';
import Markdown from 'markdown-to-jsx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

export interface BlogPostProps {
  post: Article | undefined;
}
const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  if (!post) {
    return null;
  }
  const date = dateFormat(post.publishedAt);
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.desc}
        canonical={`https://yasbr.com/blog/${post.slug}`}
        openGraph={{
          title: post.title,
          description: post.desc,
          url: `https://yasbr.com/blog/${post.slug}`,
          images: [
            {
              url: imageTransformer(post?.cover?.data?.attributes?.url!),
              alt: post.title,
            },
          ],
        }}
      />
      <HomeLayout>
        <article className="max-w-3xl py-3 mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex font-light text-md">
              <p className="">{date}</p>
              <span className="mx-1">/</span>
              <p>{comma(post.views)} Views</p>
            </div>
            <p className="">{}</p>
            <h1 className="text-4xl text-center font-extrabold">
              {post.title}
            </h1>
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
      </HomeLayout>
    </>
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
  const posts = await getArticles({
    filters: { slug: { eq: context?.params?.slug as string } },
  });

  const post = posts.articles?.data?.[0].attributes;
  if (post) {
    await updateArticle({
      id: posts.articles?.data?.[0].id!,
      data: {
        views: post?.views! + 1,
      },
    });
  }

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
