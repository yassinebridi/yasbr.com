import { NextApiRequest, NextApiResponse } from 'next';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'yassine@yasbr.com';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, message, number } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `yasbr.com <${CONTACT_FROM_EMAIL}>`,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `New contact form submission from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${number || '(not provided)'}`,
          '',
          message,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Resend error:', errorBody);
      return res.status(502).json({ ok: false, error: 'Failed to send message' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('contact error: ', error);
    return res.status(500).json({ ok: false, error: 'Failed to send message' });
  }
}
