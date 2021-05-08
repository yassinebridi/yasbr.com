import { Hero, HeroInfo, Introduction } from '@components';
import { HomeLayout } from '@layouts';
import React from 'react';

export default function Home() {
  return (
    <HomeLayout>
      <div className="">
        <div className="relative">
          <Hero />
          <HeroInfo />
        </div>
        <Introduction />
      </div>
    </HomeLayout>
  );
}
