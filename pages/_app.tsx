import { seoConfig } from '@utils';
import 'focus-visible/dist/focus-visible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import '../styles/globals.css';
import '../styles/prism-coldark.css';
import '../styles/react-notion.css';
import '../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
