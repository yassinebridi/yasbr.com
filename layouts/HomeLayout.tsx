import { Container, Footer, Header } from '@components';
import clsx from 'clsx';
import React from 'react';

export interface HomeLayoutProps {
  cn?: string;
}
const HomeLayout: React.FC<HomeLayoutProps> = ({ children, cn }) => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Header />
      <main className={clsx(cn, 'dark:bg-primary-900 dark:text-primary-200')}>
        <Container>{children}</Container>
      </main>
      <Footer />

      {/* <ScrollToTop showUnder={160}> */}
      {/*   <button title="Go to top"> */}
      {/*     <ChevronUpIcon className="w-12 h-12 p-2 bg-primary-800 rounded-full text-primary-50" /> */}
      {/*   </button> */}
      {/* </ScrollToTop> */}
    </div>
  );
};

export default HomeLayout;
