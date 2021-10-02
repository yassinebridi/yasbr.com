import splitbee from '@splitbee/web';
import { seoConfig } from '@utils';
import 'focus-visible/dist/focus-visible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
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
    <ThemeProvider attribute="class">
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
