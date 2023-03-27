import { createPage, databasesId } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Name, Email, Company, Content, Deadline, Brief } = req.body;
  const newContact = await createPage({
    parent: { database_id: databasesId.sections.contact },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: Name,
            },
          },
        ],
      },
      Email: {
        rich_text: [
          {
            text: {
              content: Email,
            },
          },
        ],
      },
      Company: {
        rich_text: [
          {
            text: {
              content: Company,
            },
          },
        ],
      },
      Content: {
        rich_text: [
          {
            text: {
              content: Content,
            },
          },
        ],
      },
      Deadline: {
        select: {
          name: Deadline,
        },
      },
      Brief: { url: Brief },
    },
  });

  return res.status(200).json({
    ok: true,
    data: newContact,
  });
}
