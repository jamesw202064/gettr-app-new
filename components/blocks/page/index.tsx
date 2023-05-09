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
  console.log("file: index.tsx:12 ---- props:", props)
  return (
    <>
      {props?.blocks?.map(function (block, i) {
        switch (block.__typename) {
          case 'PageBlocksFeatures':
            return (
              <React.Fragment key={i + block.__typename}>
                <Features data={block} />
              </React.Fragment>
            );
          case 'PageBlocksHero':
            return (
              <React.Fragment key={i + block.__typename}>
                <Hero data={block} />
              </React.Fragment>
            );
          case 'PageBlocksContent':
            return (
              <React.Fragment key={i + block.__typename}>
                <Content data={block} />
              </React.Fragment>
            );
          case 'PageBlocksContact':
            return (
              <React.Fragment key={i + block.__typename}>
                <Contact data={block} />
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
                <FeaturesOnlyText data={block} />
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
