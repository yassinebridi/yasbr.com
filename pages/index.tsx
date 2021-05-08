import Hero from '@components/Hero';
import { HomeLayout } from '@layouts';
import React from 'react';

export default function Home() {
  return (
    <HomeLayout>
      <div className="">
        <Hero />
      </div>
    </HomeLayout>
  );
}
