function getRequestParams(email: any) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = process.env.MAILCHIMP_API_KEY?.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    await fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers,
    });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error:
        "Oops, something went wrong... Send me an email at yassine@yasbr.com and I'll manually add you to the list.",
    });
  }
};
