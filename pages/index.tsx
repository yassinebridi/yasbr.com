import {
  Banner,
  Hero,
  HeroInfo,
  Introduction,
  Projects,
  Services,
  Skills,
} from '@components';
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
        <Skills />
        <Services />
        <Projects />
        <Banner />
      </div>
    </HomeLayout>
  );
}
