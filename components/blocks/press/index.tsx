import React from 'react';
import type { Press } from '../../../tina/__generated__/types';
// import { Content } from './content';
// import { Image } from './image';

export const PressBlocks = (_: Press) => {
  return (
    <>
      {/* {props?.sections?.length
        ? props.sections.map(function (block, i) {
            switch (block.__typename) {
              case 'PressSectionsContent':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case 'PressSectionsImage':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Image data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null} */}
    </>
  );
};
