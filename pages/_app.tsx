import * as ga from '@lib/gtag';
import splitbee from '@splitbee/web';
import { seoConfig } from '@utils';
import 'focus-visible/dist/focus-visible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React from 'react';
import '../styles/globals.css';
import '../styles/prism-coldark.css';
import '../styles/react-notion.css';
import '../styles/slider.css';

splitbee.init({
  scriptUrl: '/bee.js',
  apiUrl: '/_hive',
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        type="text/plain"
        data-src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        data-cookiecategory="analytics"
        strategy="lazyOnload"
      />
      <Script
        type="text/plain"
        data-cookiecategory="analytics"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GA_ID}, {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Root>
        <ThemeProvider attribute="class">
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Root>
    </>
  );
}

export default MyApp;

function Root({ children }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <>{children}</>;
}
