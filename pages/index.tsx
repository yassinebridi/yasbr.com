import CodeEditor from '@components/CodeEditor';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Introduction from '@components/Introduction';
import Uses from '@components/Uses';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full px-10 py-4">
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

      <hr
        className="my-12 border-none"
        style={{ height: '1.5px', backgroundColor: '#111' }}
      />

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
