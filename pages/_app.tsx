import type { AppProps } from 'next/app';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.css';
import '../styles/react-notion.css';
import '../styles/prism-coldark.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
