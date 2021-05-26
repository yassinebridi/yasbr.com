import { ImageLoaderProps } from 'next/image';
import { MapImageUrl } from 'react-notion';

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

export const getImageUrl = (image = '', block) => {
  const url = new URL(
    `https://www.notion.so${
      image.startsWith('/image') ? image : `/image/${encodeURIComponent(image)}`
    }`
  );

  if (block && !image.includes('/images/page-cover/')) {
    const table =
      block.blockValue.parent_table === 'space'
        ? 'block'
        : block.blockValue.parent_table;
    url.searchParams.set('table', table);
    url.searchParams.set('id', block.blockValue.id);
    url.searchParams.set('cache', 'v2');
  }

  return url.toString();
};
