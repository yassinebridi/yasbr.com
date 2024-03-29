import { ComponentDynamicsTitleImage } from '@adapters';
import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';

export interface TestimonialProps {
  items: ComponentDynamicsTitleImage[] | undefined;
}
const Testimonial: React.FC<TestimonialProps> = ({ items }) => {
  return (
    <div className="py-16 bg-primary-50 dark:bg-primary-800">
      <div className="flex items-center max-w-4xl px-6 mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Testimonials</h3>
            <h2
              id="testimonial"
              className="text-2xl font-extrabold sm:text-3xl"
            >
              <a href="#testimonial" title="testimonial" className="ringify">
                What my clients are saying.
              </a>
            </h2>
          </div>

          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {items?.map((item, i) => {
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
  item: ComponentDynamicsTitleImage;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="flex items-center space-x-4">
          <img
            src={item.image?.data?.attributes?.url!}
            alt={item.title}
            height={70}
            width={70}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{item.title}</span>
            <span className="text-sm font-light">Client</span>
          </div>
        </div>
        <div className="flex mt-3 sm:mt-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
        </div>
      </div>
      <p className="text-sm sm:px-2 leading-6">{item.desc}</p>
    </div>
  );
};
