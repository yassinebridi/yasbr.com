import { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  title: 'Yassine Bridi – Developer, Designer , Creator.',
  titleTemplate: '%s | Yasbr.com',
  description:
    'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
  canonical: 'https://yasbr.com',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://yasbr.com',
    site_name: 'Yasbr',
    title: 'Yassine Bridi – Developer, Designer , Creator.',
    images: [
      {
        url: 'https://media.yasbr.com/upload/og/home.jpg',
        alt: 'Yassine Bridi – Developer, Designer , Creator.',
      },
    ],
    description:
      'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
  },
  twitter: {
    handle: '@yassinebridi',
    site: 'yasbr.com',
    cardType: 'summary_large_image',
  },
};
