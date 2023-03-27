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
