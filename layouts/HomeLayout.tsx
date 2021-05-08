import { Container, Footer, Header } from '@components';
import clsx from 'clsx';
import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { ChevronUpIcon } from '@heroicons/react/solid';

export interface HomeLayoutProps {
  cn?: string;
}
const HomeLayout: React.FC<HomeLayoutProps> = ({ children, cn }) => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Header />
      <main className={clsx('"bg-gray-100"', cn)}>
        <Container>{children}</Container>
      </main>
      <Footer />

      <ScrollToTop showUnder={160}>
        <span title="Go to top">
          <ChevronUpIcon className="w-12 h-12 p-2 bg-gray-800 rounded-full text-gray-50" />
        </span>
      </ScrollToTop>
    </div>
  );
};

export default HomeLayout;
