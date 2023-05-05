import React from 'react';

import { Container } from '../../container';
import { Section } from '../../section';
import { Markdown } from '../../markdown';

import Apple from 'public/apple.svg';
import Android from 'public/android.svg';

export const Image = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container size={'medium'} className="md:py-32 md:max-w-6xl">
        <h1 className="text-3.5xl font-extrabold leading-10 text-brand mb-5 tracking-wide">{data.title}</h1>
        <Markdown className="content__markdown" children={data.body} />

        <div className="flex space-x-3 justify-center mt-8">
          <a href="https://apps.apple.com/app/id1571619156" target="_blank" rel="noopener noreferrer">
            <Apple />
          </a>
          <a
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
