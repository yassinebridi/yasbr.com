import { Page } from '@notionhq/client/build/src/api-types';

export type PageExd = Page & {
  slug: string;
  views: string;
  created_time: Date;
  last_edited_time: Date;
};
