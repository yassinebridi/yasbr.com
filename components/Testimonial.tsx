import { TestimonialItem, testimonialsItems } from '@data/testimonials';
import { StarIcon } from '@heroicons/react/solid';
import { originalLoader, TestimsType } from '@utils';
import Image from 'next/image';
import React from 'react';

export interface TestimonialProps {
  items: TestimsType[];
}
const Testimonial: React.FC<TestimonialProps> = ({ items }) => {
  console.log('items: ayyyyyy', items);
  return (
    <div className="py-16 bg-primary-50">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Testimonials</h3>
            <h2 id="testimonial" className="text-3xl font-extrabold">
              <a href="#testimonial" title="testimonial" className="ringify">
                What my clients are saying.
              </a>
            </h2>
          </div>

          <div className="mt-6">
            <ul className="grid grid-cols-2 gap-16">
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
  item: TestimsType;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={item.Avatar[0].url}
            alt={item.Name}
            loader={originalLoader}
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
      <p className="text-sm leading-6">{item.Text}</p>
    </div>
  );
};
