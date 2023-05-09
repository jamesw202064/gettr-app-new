import React from 'react';

import { Container } from '../../container';
import { Section } from '../../section';
import { Markdown } from '../../markdown';
import Apple from 'public/apple.svg';
import Android from 'public/android.svg';

export const Content = ({ data, parentField }) => {
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
          <div data-id="FFFFFFFF" className="flex-1">
            <Markdown className="content__markdown page-content" children={data.body} />
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
