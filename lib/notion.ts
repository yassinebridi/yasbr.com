import { PagesUpdateParameters, WithAuth } from 'notion';
import { BlockMapType } from 'react-notion';

export const databasesId = {
  posts: process.env.POSTS_DATABASE_ID,
  tags: process.env.TAGS_DATABASE_ID,
  sections: {
    intro: process.env.INTRO_DATABASE_ID,
    skills: process.env.SKILLS_DATABASE_ID,
    services: process.env.SERVICES_DATABASE_ID,
    projects: process.env.PROJECTS_DATABASE_ID,
    testims: process.env.TESTIMS_DATABASE_ID,
  },
};
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

export const getDatabase = async <T>(databaseId: string): Promise<T[]> => {
  const res = await fetch(
    `${myNotionBaseApi}/table/${databaseId}`,
    myNotionFetchConfig
  );
  const data = await res.json();
  return data;
};

export const getPageBySlug = async <T>(
  databaseId: string,
  slug: string
): Promise<T> => {
  const items: any = await getDatabase<T>(databaseId);

  const item = items.find((post) => post.Slug === slug);
  return item;
};

export const getBlocks = async (pageId: string): Promise<BlockMapType> => {
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
