import { getBlocks, getPage } from '@lib';
import { Block } from '@notionhq/client/build/src/api-types';
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

const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? 'font-bold' : '',
          code ? 'bg-red-200' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
      break;
    case 'heading_1':
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
      break;
    case 'heading_2':
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
      break;
    case 'heading_3':
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
      break;
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
      break;
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.text} />
          </label>
        </div>
      );
      break;
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          It's a toggle!
        </details>
      );
      break;
    case 'child_page':
      return <p>{value.title}</p>;
      break;
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`;
  }
};
