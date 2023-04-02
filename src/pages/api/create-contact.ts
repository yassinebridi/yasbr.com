import { createContact } from '@adapters';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message, number } = req.body;

  const contact = await createContact({
    data: {
      email,
      message,
      name,
      number,
    },
  });
  return res.status(200).json({
    ok: true,
    data: contact,
  });
}
