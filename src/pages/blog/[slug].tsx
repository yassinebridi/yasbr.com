import { Notion, Subscribe } from '@components';
import { HomeLayout } from '@layouts';
import {
  databasesId,
  getBlocks,
  getDatabase,
  getPageBySlug,
  updatePage,
} from '@lib';
import { BlogPostType, dateFormat, imageTransformer, TagType } from '@utils';
import comma from 'comma-number';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface BlogPostProps {
  post: BlogPostType;
  tags: TagType[];
  blocks: BlockMapType;
}
const BlogPost: React.FC<BlogPostProps> = ({ post, tags, blocks }) => {
  if (!post || !blocks) {
    return <div />;
  }
  const date = dateFormat(post.Date);
  return (
    <>
      <NextSeo
        title={post.Title}
        description={post.Preview}
        canonical={`https://yasbr.com/blog/${post.Slug}`}
        openGraph={{
          title: post.Title,
          description: post.Preview,
          url: `https://yasbr.com/blog/${post.Slug}`,
          images: [
            {
              url: imageTransformer(post.Image[0].rawUrl),
              alt: post.Title,
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
              <p>{comma(post.Views)} Views</p>
            </div>
            <p className="">{}</p>
            <h1 className="text-4xl text-center font-extrabold">
              {post.Title}
            </h1>
            <div className="flex space-x-3">
              {/* {post.Authors.map((author) => ( */}
              {/*   <div key={author.id} className="flex items-center space-x-2"> */}
              {/*     <Image */}
              {/*       src={author.profilePhoto} */}
              {/*       alt="Yassine Bridi's avatar" */}
              {/*       loader={(loader) => loader.src} */}
              {/*       height={23} */}
              {/*       width={23} */}
              {/*       className="rounded-full" */}
              {/*     /> */}
              {/*     <span className="text-sm text-primary-800 leading-3"> */}
              {/*       {author.fullName} */}
              {/*     </span> */}
              {/*   </div> */}
              {/* ))} */}
            </div>
            <div className="flex mt-3 space-x-2">
              {tags.map((tag) => (
                <Link key={tag.id} href={`/blog/tags/${tag.Slug}`}>
                  <a className="px-2 py-1 text-sm dark:bg-primary-800 bg-primary-100">
                    #{tag.Name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <section className="mt-10 px-6">
            <Notion blocks={blocks} />
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
  const { slug } = context.params;
  const post = await getPageBySlug<BlogPostType>(
    databasesId.posts,
    slug as string
  );
  const tagsTable = await getDatabase<TagType>(databasesId.tags);
  const tags = tagsTable.filter((tag) => post.Tags.includes(tag.id));
  const blocks = await getBlocks(post.id);

  await updatePage({
    page_id: post.id,
    properties: { Views: { number: post.Views + 1 } },
  });

  return {
    props: {
      post,
      tags,
      blocks,
    },
    revalidate: 1,
  };
};
