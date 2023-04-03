import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { ImageLoaderProps } from 'next/image';

export const dateFormat = (date: Date) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

export const originalLoader = (loader: ImageLoaderProps) => {
  return loader.src;
};
export const cloudinaryLoader = (loader: ImageLoaderProps) => {
  return imageTransformer(loader.src, 'q_auto,f_auto');
};

export const imageTransformer = (url: string, transformations?: string) => {
  if (transformations) {
    return url.replace(
      'res.cloudinary.com/yasbr/image/upload',
      `media.yasbr.com/upload/${transformations}`
    );
  } else {
    return url.replace(
      'res.cloudinary.com/yasbr/image/upload',
      `media.yasbr.com/upload`
    );
  }
};
