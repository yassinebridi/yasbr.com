import { blogDatabaseId, getPage, getPageId, updatePage } from '@lib';
import { PageExd } from '@utils';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const pageId = await getPageId(blogDatabaseId, req.query.slug as string);
    const pageBefore = (await getPage(pageId)) as PageExd;
    const viewsBeforeProps = pageBefore?.properties.Views as any;
    const viewsBefore = viewsBeforeProps.number;
    const update = await updatePage({
      page_id: pageId,
      // @ts-ignore
      properties: { Views: { number: viewsBefore + 1 } },
    });
    const viewsAfterProps = update?.properties.Views as any;
    const viewsAfter = viewsAfterProps.number;

    return res.status(200).json({
      total: viewsAfter,
    });
  }

  if (req.method === 'GET') {
    const pageId = await getPageId(blogDatabaseId, req.query.slug as string);
    const page = (await getPage(pageId)) as PageExd;
    const viewsProps = page?.properties.Views as any;
    const views = viewsProps.number;

    return res.status(200).json({ total: views });
  }
}
