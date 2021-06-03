import { DefaultSeoProps } from 'next-seo';

export const seoConfig: DefaultSeoProps = {
  title: 'Yassine Bridi – Developer, writer, creator.',
  titleTemplate: '%s | Yasbr.com',
  description:
    'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
  canonical: 'https://yasbr.com',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://yasbr.com',
    site_name: 'Yasbr',
    title: 'Yassine Bridi – Developer, writer, creator.',
    images: [
      {
        url: 'https://media.yasbr.com/upload/og/home.jpg',
        alt: 'Yassine Bridi – Developer, writer, creator.',
      },
    ],
    description:
      'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};
