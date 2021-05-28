import { imageTransformer } from '@utils';
import React from 'react';
import { BlockMapType, NotionRenderer } from 'react-notion';

export interface NotionProps {
  blocks: BlockMapType;
}
const Notion: React.FC<NotionProps> = ({ blocks }) => {
  return (
    <NotionRenderer
      blockMap={blocks}
      mapImageUrl={(img) => {
        return imageTransformer(img, 'f_auto,q_auto');
      }}
    />
  );
};

export default Notion;

// mapImageUrl={(img, block) => {
//   const value = block.value as ContentValueType;
//   const format = value.format;
//   const width = format.block_width;
//   const height = format.block_height;
//   const resolution =
//     width === undefined || height === undefined
//       ? 'w_400'
//       : `w_${width},h_${height}`;
//   return `https://res.cloudinary.com/yasbr/image/fetch/f_auto,c_limit,${resolution}/https://www.notion.so/image/${img}`;
// }}

// customBlockComponents={{
//   image: (props) => {
//     const value = props.blockValue as ContentValueType;
//     const format = value.format;
//     const width = format.block_width;
//     const height = format.block_height;
//     const resolution =
//       width === undefined || height === undefined
//         ? 'w_400'
//         : `w_${width},h_${height}`;
//     const url = getImageUrl(format.display_source, props, resolution);
//     return (
//       <div
//         style={{
//           position: 'relative',
//           width: `${width}px`,
//           height: `${height}px`,
//         }}
//       >
//         <Image
//           src={url}
//           alt="Yassine Bridi's avatar"
//           loader={(loader) => `/${loader.src}`}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     );
//   },
// }}
