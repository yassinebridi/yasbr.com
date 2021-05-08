import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export interface ContainerProps {
  customMeta?: {
    [key: string]: string;
  };
}
const Container: React.FC<ContainerProps> = ({ children, customMeta }) => {
  const router = useRouter();

  const meta = {
    title: 'Yassine Bridi – Developer, writer, creator.',
    description: `Full-stack developer, JavaScript enthusiast.`,
    image: 'https://yasbr.com/static/images/banner.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://yasbr.com${router.asPath}`} />
        <link rel="canonical" href={`https://yasbr.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Yassine Bridi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yassinebridi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Container;
