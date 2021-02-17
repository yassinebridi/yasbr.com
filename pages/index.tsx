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
    </div>
  );
}
