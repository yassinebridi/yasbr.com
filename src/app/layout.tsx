import { AppFooter, AppHeader } from '@/components/shared';
import { hostname } from '@utils';
import { cn } from '@utils/helpers';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'focus-visible/dist/focus-visible';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/prism-coldark.css';
import '../styles/react-notion.css';
import '../styles/slider.css';

export const metadata: Metadata = {
  title: {
    default: 'Yassine Bridi – Developer, Designer, Writer.',
    template: '%s | Yasbr.com',
  },
  description:
    'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
  applicationName: 'Yasbr',
  referrer: 'origin-when-cross-origin',
  keywords: ['yassine bridi'],
  authors: [{ name: 'Yassine Bridi', url: 'https://yasbr.com' }],
  colorScheme: 'light',
  creator: 'Yassine Bridi',
  publisher: 'Yassine Bridi',
  alternates: {
    canonical: `${hostname}`,
  },
  openGraph: {
    title: 'Yassine Bridi – Developer, Designer, Writer.',
    description:
      'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
    url: hostname,
    siteName: 'Yassine Bridi',
    images: [
      {
        url: `https://media.yasbr.com/upload/og/home.jpg`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yassine Bridi – Developer, Designer, Writer.',
    description:
      'Yassine Bridi, a developer who also designs, with a keen interest in web and mobile technology.',
    creator: '@yassinebridi',
    images: [`https://media.yasbr.com/upload/og/home.jpg`],
  },
  manifest: `${hostname}/static/favicons/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/static/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      new URL('/static/favicons/favicon-32x32.png', hostname),
    ],
    shortcut: ['/static/favicons/favicon-32x32.png'],
    apple: [{ url: '/static/favicons/apple-touch-icon.png' }],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'light' },
    { media: '(prefers-color-scheme: dark)', color: 'dark' },
  ],
};

const inter = Inter({ subsets: ['latin'] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body
        className={cn(
          inter.className,
          'bg-white dark:bg-primary-900 dark:text-primary-200'
        )}
      >
        <Script
          data-domain="yasbr.com"
          src="/js/script.js"
          strategy="afterInteractive"
        ></Script>

        <div className="flex flex-col flex-1 w-full">
          <AppHeader />
          <main>{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
