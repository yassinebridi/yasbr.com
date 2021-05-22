import { ImageLoaderProps } from 'next/image';

export const dateFormat = (date: Date) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

export const cloudinaryLoader = (loader: ImageLoaderProps) => {
  return `https://res.cloudinary.com/yasbr/image/fetch/f_auto,c_limit/${loader.src}`;
};

export const originalLoader = (loader: ImageLoaderProps) => {
  return loader.src;
};
