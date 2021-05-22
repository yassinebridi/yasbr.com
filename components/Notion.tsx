import React from 'react';
import { BlockMapType, ContentValueType, NotionRenderer } from 'react-notion';

export interface NotionProps {
  blocks: BlockMapType;
}
const Notion: React.FC<NotionProps> = ({ blocks }) => {
  return (
    <NotionRenderer
      blockMap={blocks}
      mapImageUrl={(img, block) => {
        const value = block.value as ContentValueType;
        const format = value.format;
        const width = format.block_width;
        const height = format.block_height;
        const resolution =
          width === undefined || height === undefined
            ? 'w_400'
            : `w_${width},h_${height}`;
        return `https://res.cloudinary.com/yasbr/image/fetch/f_auto,c_limit,${resolution}/${img}`;
      }}
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
      //     const src = value.format.display_source;
      //     return (
      //       <div
      //         style={{
      //           position: 'relative',
      //           width: `${width}px`,
      //           height: `${height}px`,
      //         }}
      //       >
      //         <Image
      //           src={src}
      //           alt="Yassine Bridi's avatar"
      //           loader={(loader) =>
      //             `https://res.cloudinary.com/yasbr/image/fetch/f_auto,c_limit,${resolution}/${loader.src}`
      //           }
      //           layout="fill"
      //           objectFit="cover"
      //         />
      //       </div>
      //     );
      //   },
      // }}
    />
  );
};

export default Notion;
