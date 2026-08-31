import postCover from '@/assets/sections/posts/how-to-integrate-youcan-pay-with-reactjs-and-nextjs.png';
import type { BlogPost } from '@/data/types';

const content = `
Integrating a local payment gateway into a React/Next.js app always comes with its own set of quirks, and [YouCan Pay](https://youcanpay.com) is no exception. In this post I'll walk you through the full flow: tokenizing a card server-side, redirecting the customer to complete the 3D-Secure challenge, and confirming the payment once they land back on your app.

![YouCan Pay flow illustration](https://youcanpay.com/images/png/doc/youcan-pay-flow-illustration.png)

## How the flow works

YouCan Pay never lets your frontend talk to its API directly with your secret keys. Instead, the flow is split in two:

1. Your **server** exchanges the customer's card details (collected through YouCan Pay's hosted fields or SDK) for a short-lived **token**, using your private key.
2. Your **frontend** takes that token and redirects the customer to the YouCan Pay checkout page, where the 3D-Secure challenge and the actual charge happen.

Keeping the tokenization step on the server means your private key never touches the browser.

## Setting up the tokenize API route

Since we don't want to expose the private key on the client, the tokenization call needs to live behind an API route. Here's what that looks like in a Next.js project using the Pages Router API routes:

\`\`\`ts
// /pages/api/tokenize.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const YOUCAN_PAY_TOKEN_URL = 'https://youcanpay.com/api/payment/token';

type TokenizeResponse =
  | { token: string }
  | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenizeResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { order_id, amount, currency } = req.body;

  try {
    const response = await fetch(YOUCAN_PAY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${process.env.YOUCAN_PAY_PRIVATE_KEY}\`,
      },
      body: JSON.stringify({
        order_id,
        amount,
        currency,
        success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/checkout/success\`,
        error_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/checkout/error\`,
      }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      return res.status(response.status).json({ error: message });
    }

    const { id: token } = await response.json();
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to tokenize payment' });
  }
}
\`\`\`

The route accepts the order details, forwards them to YouCan Pay with your private key attached, and returns a token your frontend can safely use.

## Requesting the token from the client

On the client, the checkout page calls \`/api/tokenize\` once the customer confirms their order, then stores the returned token in state:

\`\`\`tsx
import { useEffect, useState } from 'react';

interface UseYouCanPayTokenArgs {
  orderId: string;
  amount: number;
  currency: string;
}

function useYouCanPayToken({ orderId, amount, currency }: UseYouCanPayTokenArgs) {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchToken = async () => {
      try {
        const response = await fetch('/api/tokenize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ order_id: orderId, amount, currency }),
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error);
        if (isMounted) setToken(data.token);
      } catch (err) {
        if (isMounted) setError((err as Error).message);
      }
    };

    fetchToken();

    return () => {
      isMounted = false;
    };
  }, [orderId, amount, currency]);

  return { token, error };
}
\`\`\`

## Rendering the checkout button

Once you have a token, redirecting the customer to YouCan Pay's checkout page is just a link:

\`\`\`tsx
function CheckoutButton({ token }: { token: string | null }) {
  if (!token) {
    return <button disabled>Preparing payment…</button>;
  }

  return (
    <a
      href={\`https://youcanpay.com/checkout/\${token}\`}
      className="btn btn-primary"
    >
      Pay now
    </a>
  );
}
\`\`\`

From here, YouCan Pay takes over: it collects the card details, runs the 3D-Secure challenge, and redirects the customer back to your \`success_url\` or \`error_url\` once the payment is settled.

## Confirming the payment

Don't trust the redirect alone to mark an order as paid — a customer could close the tab before the redirect happens, or tamper with the query string. Instead, listen for YouCan Pay's webhook on your backend and verify the payment status server-side before fulfilling the order. Treat the \`success_url\` redirect purely as a UX signal to show a "Payment received" screen.

## Wrapping up

The pattern is the same one you'd use for most hosted-checkout payment providers: tokenize with your secret key on the server, hand a short-lived token to the client, redirect to the provider's hosted page, and confirm the final state through a webhook rather than the redirect itself. Once that separation is in place, wiring YouCan Pay into a React or Next.js app is mostly boilerplate.
`.trim();

export const posts: BlogPost[] = [
  {
    title: 'How to integrate YouCan Pay with React.js/Next.js',
    slug: 'how-to-integrate-youcan-pay-with-reactjs-and-nextjs',
    description:
      'Integrating YouCan Pay payment gateway with Next.js and React.js',
    views: 1201,
    featured: true,
    cover: postCover,
    publishedAt: '2024-01-03',
    content,
  },
];
