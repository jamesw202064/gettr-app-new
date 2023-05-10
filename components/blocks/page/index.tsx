import React from 'react';
import type { Page } from '../../../tina/__generated__/types';
import { Content } from './content';
import { Contact } from './contact';
import { Leadership } from './leadership';
import { Partner } from './partner';
import { FeaturesOnlyText } from './featuresOnlyText';
import { Features } from '../features';
import { Hero } from '../hero';

export const PageBlocks = (props: Page) => {
  return (
    <>
      {props?.blocks?.map(function (block, i) {
        switch (block.__typename) {
          case 'PageBlocksFeatures':
            return (
              <React.Fragment key={i + block.__typename}>
                <Features data={block} parentField={`blocks.${i}`} />
              </React.Fragment>
            );
          case 'PageBlocksHero':
            return (
              <React.Fragment key={i + block.__typename}>
                <Hero data={block} parentField={`blocks.${i}`} />
              </React.Fragment>
            );
          case 'PageBlocksContent':
            return (
              <React.Fragment key={i + block.__typename}>
                <Content data={block} parentField={`blocks.${i}`} />
              </React.Fragment>
            );
          case 'PageBlocksContact':
            return (
              <React.Fragment key={i + block.__typename}>
                <Contact data={block} parentField={`blocks.${i}`} />
              </React.Fragment>
            );
          case 'PageBlocksPartner':
            return (
              <React.Fragment key={i + block.__typename}>
                <Partner data={block} />
              </React.Fragment>
            );
          case 'PageBlocksLeadership':
            return (
              <React.Fragment key={i + block.__typename}>
                <Leadership data={block} />
              </React.Fragment>
            );
          case 'PageBlocksFeatureOnlyTexts':
            return (
              <React.Fragment key={i + block.__typename}>
                <FeaturesOnlyText data={block} parentField={`blocks.${i}`} />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
