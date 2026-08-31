'use client';

import type { Project } from '@/data/types';
import Carousel, { arrowsPlugin, Dots } from '@brainhubeu/react-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export interface ProjectSliderProps {
  project: Project;
}
const ProjectSlider: React.FC<ProjectSliderProps> = ({ project }) => {
  const slides = project.images.map((image, i) => (
    <div className={clsx('px-4')} key={i}>
      <Image
        src={image.src}
        alt={image.alt}
        className={clsx('shadow-lg h-full w-[800px]')}
      />
    </div>
  ));
  const thumbnails = project.images.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={image.alt}
      width={100}
      height={100}
      className={clsx('object-cover border-2 border-primary-200')}
    />
  ));
  const [carState, setCarState] = React.useState({ value: 0 });

  const handleChange = (value: number) => {
    setCarState({ value });
  };

  return (
    <div className="flex flex-col w-full p-5">
      <Carousel
        value={carState.value}
        slides={slides}
        onChange={handleChange}
        animationSpeed={300}
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className="p-2 mr-3 text-white rounded-none shadow-xl dark:bg-primary-700 bg-primary-400 ringify">
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
              ),
              arrowLeftDisabled: (
                <button className="p-2 mr-3 text-white rounded-none shadow-xl dark:bg-primary-600 bg-primary-300 ringify disabled">
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
              ),
              arrowRight: (
                <button className="p-2 ml-3 text-white rounded-none shadow-xl dark:bg-primary-700 bg-primary-400 ringify">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              ),
              arrowRightDisabled: (
                <button className="p-2 ml-3 text-white rounded-none shadow-xl dark:bg-primary-600 bg-primary-300 ringify disabled">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
      />
      <Dots
        number={thumbnails.length}
        thumbnails={thumbnails}
        value={carState.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProjectSlider;
