import { StarIcon } from '@heroicons/react/solid';
import { cloudinaryLoader, TestimType } from '@utils';
import Image from 'next/image';
import React from 'react';

export interface TestimonialProps {
  items: TestimType[];
}
const Testimonial: React.FC<TestimonialProps> = ({ items }) => {
  return (
    <div className="py-16 bg-primary-50 dark:bg-primary-800">
      <div className="flex items-center max-w-4xl px-6 mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500 text-primary-400">
              Testimonials
            </h3>
            <h2
              id="testimonial"
              className="text-2xl sm:text-3xl font-extrabold"
            >
              <a href="#testimonial" title="testimonial" className="ringify">
                What my clients are saying.
              </a>
            </h2>
          </div>

          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {items.map((item, i) => {
                return <TestimonialCard key={i} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

export interface TestimonialCardProps {
  item: TestimType;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={item.Avatar[0].rawUrl}
            alt={item.Name}
            loader={cloudinaryLoader}
            height={70}
            width={70}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{item.Name}</span>
            <span className="text-sm font-light">{item.Role}</span>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
        </div>
      </div>
      <p className="px-2 text-sm leading-6">{item.Text}</p>
    </div>
  );
};
