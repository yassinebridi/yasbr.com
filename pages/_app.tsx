import { seoConfig } from '@utils';
import 'focus-visible/dist/focus-visible';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import '../styles/prism-coldark.css';
import '../styles/react-notion.css';
import '../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="yasbr.com">
      <ThemeProvider attribute="class">
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  );
}

export default MyApp;
