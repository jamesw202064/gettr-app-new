import React from 'react';
import { Container } from '../util/container';
import { Section } from '../util/section';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import type { Template } from 'tinacms';
import Apple from '../../public/apple.svg';
import Android from '../../public/android.svg';
import { PageBlocksContent } from '../../tina/__generated__/types';
interface IContent {
  data: PageBlocksContent;
  parentField?: string;
}
export const Content = ({ data }: IContent) => {
  return (
    <Section color={data.color}>
      <Container size={'medium'} className="px-4.5 lg:px-0 md:py-32 md:max-w-max_section">
        <h1
          className="text-3.5xl font-extrabold leading-10 text-brand mb-5 tracking-wide"
          style={{
            letterSpacing: '1.41px'
          }}
        >
          {data.title}
        </h1>
        <div className="md:flex gap-8">
          <div className="flex-1">
            {/* <Markdown className="content__markdown page-content" children={data.body} /> */}
            <div className="content__markdown page-content">
              <TinaMarkdown content={data.body} />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img alt="gettr_concept" style={{ maxWidth: 440 }} className="w-full" src={data.avatar} />
          </div>
        </div>

        <div className="flex justify-center mt-7.5 flex-wrap">
          <a
            className="mx-1.5"
            href="https://apps.apple.com/app/id1571619156"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Apple />
          </a>
          <a
            className="mx-1.5"
            href="https://play.google.com/store/apps/details?id=com.gettr.gettr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Android />
          </a>
        </div>
      </Container>
    </Section>
  );
};

export const contentBlockSchema: Template = {
  name: 'content',
  label: 'Content',
  ui: {
    previewSrc: '/blocks/content.png',
    defaultItem: {
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
    }
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body'
    },
    {
      type: 'image',
      name: 'avatar',
      label: 'avatar'
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tint', value: 'tint' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};
