import React from 'react';
import type { Page } from '../tina/__generated__/types';
import { Content } from './blocks/content';
import { Features } from './blocks/features';
import { Hero } from './blocks/hero';
import { Testimonial } from './blocks/testimonial';
import { Contact } from './blocks/page/contact';
import { Leadership } from './blocks/page/leadership';
import { Partner } from './blocks/page/partner';

export const Blocks = (props: Omit<Page, 'id' | '_sys' | '_values'>) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case 'PageBlocksContent':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PageBlocksHero':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PageBlocksFeatures':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Features data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PageBlocksTestimonial':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PagesBlocksContact':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Contact data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PagesBlocksLeadership':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Leadership data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case 'PagesBlocksPartner':
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Partner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
