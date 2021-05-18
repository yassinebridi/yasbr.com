import { getBlocks, getPage } from '@lib';
import { Block } from '@notionhq/client/build/src/api-types';
import { renderBlock } from '@utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article>
        <h1>{title}</h1>
        <section>
          {blocks.map((block) => (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          ))}
          <Link href="/">
            <a>← Go home</a>
          </Link>
        </section>
      </article>
    </div>
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
  const page = await getPage(slug);
  const blocks = await getBlocks(slug);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
