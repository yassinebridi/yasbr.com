import { seoConfig } from '@utils';
import 'focus-visible/dist/focus-visible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/prism-coldark.css';
import '../styles/react-notion.css';
import '../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
