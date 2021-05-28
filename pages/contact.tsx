import { HomeLayout } from '@layouts';
import React from 'react';

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  return (
    <HomeLayout>
      <div className="max-w-4xl py-3 mx-auto">ok</div>
    </HomeLayout>
  );
};

export default Contact;
