import Document, {
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <Html>
        <Head>
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="/static/favicons/android-chrome-192x192.png"
            rel="apple-touch-icon"
            sizes="192x192"
          />
          <link
            href="/static/favicons/android-chrome-512x512.png"
            rel="apple-touch-icon"
            sizes="512x512"
          />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        </Head>
        <body className="dark:bg-primary-900 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
