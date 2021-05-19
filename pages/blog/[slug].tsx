import { ViewCountWithPost } from '@components';
import { HomeLayout } from '@layouts';
import { blogDatabaseId, getBlocks, getPage, getPageId } from '@lib';
import { Block } from '@notionhq/client/build/src/api-types';
import { dateFormat, renderBlock } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { PageExd } from '.';

export interface BlogPostProps {
  page: PageExd;
  blocks: Block[];
}
const BlogPost: React.FC<BlogPostProps> = ({ page, blocks }) => {
  if (!page || !blocks) {
    return <div />;
  }
  const titleProps = page?.properties.Title as any;
  const title = titleProps.title[0]?.plain_text;
  const slugProps = page?.properties.Slug as any;
  const slug = slugProps.rich_text[0]?.plain_text;
  const date = dateFormat(page.last_edited_time);
  return (
    <HomeLayout>
      <div>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <article className="max-w-xl py-3 mx-auto">
          <p className="font-light uppercase">{date}</p>
          <ViewCountWithPost slug={slug} />
          <p className="font-light uppercase">{}</p>
          <h1 className="text-4xl font-bold">{title}</h1>
          <section className="mt-4">
            {blocks.map((block) => (
              <React.Fragment key={block.id}>
                {renderBlock(block)}
              </React.Fragment>
            ))}
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
  const pageId = await getPageId(blogDatabaseId, slug as string);
  const page = await getPage(pageId);
  const blocks = await getBlocks(pageId);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
