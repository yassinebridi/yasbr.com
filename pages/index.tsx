import CodeEditor from '@components/CodeEditor';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Introduction from '@components/Introduction';
import Projects from '@components/Projects';
import Uses from '@components/Uses';
import Divider from '@design-system/icons/Divider';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full px-10 py-4 sm:px-18 md:px-28 lg:px-36 xl:px-56">
      <Hero />
      <div className="mt-4">
        <Introduction />
      </div>

      <div className="mt-4">
        <Uses />
      </div>

      <div className="mt-4">
        <CodeEditor />
      </div>

      <Divider />

      <div className="mt-4">
        <Projects />
      </div>

      <Divider />

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
