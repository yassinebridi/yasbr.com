import { Hero, HeroInfo } from '@components';
import { HomeLayout } from '@layouts';
import React from 'react';

export default function Home() {
  return (
    <HomeLayout>
      <div className="">
        <div className="relative">
          <Hero />
          <div className="flex justify-center">
            <div className="bg-white shadow-2xl rounded-full absolute py-10 -bottom-16">
              <HeroInfo />
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
