import { createPage, databasesId } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const newContact = await createPage({
    parent: { database_id: databasesId.sections.contact },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: 'Tuscan Kale',
            },
          },
        ],
      },
      Email: {
        rich_text: [
          {
            text: {
              content: 'yassine@yasbr.com',
            },
          },
        ],
      },
      Company: {
        rich_text: [
          {
            text: {
              content: 'yasbr',
            },
          },
        ],
      },
      CompanyType: {
        select: {
          name: 'startup',
        },
      },
      Content: {
        rich_text: [
          {
            text: {
              content: 'I want to make an eCommerce site',
            },
          },
        ],
      },
      Deadline: {
        select: {
          name: 'three',
        },
      },
      Brief: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
    },
  });

  return res.status(200).json({
    ok: true,
    data: newContact,
  });
}
