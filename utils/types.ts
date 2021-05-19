import { Page } from '@notionhq/client/build/src/api-types';

export type PageExd = Page & {
  slug: string;
  views: string;
  created_time: Date;
  last_edited_time: Date;
};

export type TagType = {
  name: string;
  desc: string;
  color: string;
};
