import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'focus-visible/dist/focus-visible';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
