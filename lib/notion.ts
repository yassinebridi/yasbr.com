import { Page } from '@utils';
import { PagesUpdateParameters, WithAuth } from 'notion';

export const blogDatabaseId = process.env.BLOG_DATABASE_ID;
const myNotionBaseApi = 'https://notion.yasbr.com/v1';
const notionBaseApi = 'https://api.notion.com/v1';

const myNotionFetchConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${process.env.MY_NOTION_TOKEN}`,
    pragma: 'no-cache',
  },
};
const fetchConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2021-05-13',
  },
};

export const getDatabase = async (databaseId: string): Promise<Page[]> => {
  const res = await fetch(
    `${myNotionBaseApi}/table/${databaseId}`,
    myNotionFetchConfig
  );
  const data = await res.json();
  return data;
};

export const getPage = async (
  databaseId: string,
  slug: string
): Promise<Page> => {
  const posts = await getDatabase(databaseId);

  const post = posts.find((post) => post.Slug === slug);
  return post;
};

export const getBlocks = async (pageId: string) => {
  const res = await fetch(
    `${myNotionBaseApi}/page/${pageId}`,
    myNotionFetchConfig
  );
  const data = await res.json();
  return data;
};

export const updatePage = async (
  args: WithAuth<PagesUpdateParameters>
): Promise<PagesUpdateParameters> => {
  const res = await fetch(`${notionBaseApi}/pages/${args.page_id}`, {
    ...fetchConfig,
    headers: {
      ...fetchConfig.headers,
      'Content-Type': 'application/json',
    },
    method: 'patch',
    body: JSON.stringify({ properties: args.properties }),
  });
  const data = await res.json();
  return data;
};
