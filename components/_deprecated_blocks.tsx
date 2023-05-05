import React from 'react';
import type { Pages } from './tina/__generated__/types';
import { Content } from './blocks/page/content';
import { Contact } from './blocks/page/contact';
import { Leadership } from './blocks/page/leadership';
import { Partner } from './blocks/page/partner';

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case 'PagesBlocksContent':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case 'PagesBlocksContact':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Contact data={block} />
                  </React.Fragment>
                );
              case 'PagesBlocksLeadership':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Leadership data={block} />
                  </React.Fragment>
                );
              case 'PagesBlocksPartner':
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Partner data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
