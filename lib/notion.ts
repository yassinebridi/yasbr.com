import { Block, Page } from '@notionhq/client/build/src/api-types';
import { PagesUpdateParameters } from '@notionhq/client/build/src/api-endpoints';

export const blogDatabaseId = process.env.BLOG_DATABASE_ID;
const notionBaseApi = 'https://api.notion.com/v1';

const fetchConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    'Notion-Version': '2021-05-13',
  },
};
export const getDatabase = async (databaseId: string): Promise<Page[]> => {
  const res = await fetch(`${notionBaseApi}/databases/${databaseId}/query`, {
    ...fetchConfig,
    method: 'post',
  });
  const data = await res.json();
  return data.results;
};

export const getPageId = async (databaseId: string, slug: string) => {
  const res = await fetch(`${notionBaseApi}/databases/${databaseId}/query`, {
    ...fetchConfig,
    headers: {
      ...fetchConfig.headers,
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({
      filter: {
        property: 'Slug',
        text: {
          contains: slug,
        },
      },
    }),
  });
  const data = await res.json();
  return data.results[0].id;
};

export const getPage = async (pageId: string): Promise<Page> => {
  const res = await fetch(`${notionBaseApi}/pages/${pageId}`, fetchConfig);
  const data = await res.json();
  return data;
};

export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const res = await fetch(
    `${notionBaseApi}/blocks/${blockId}/children`,
    fetchConfig
  );
  const data = await res.json();
  return data.results;
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
