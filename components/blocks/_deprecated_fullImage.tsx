import React from 'react';
import { Section } from '../section';

export const FullImage = ({ data }) => {
  return (
    <Section color={data.color}>
      {/* <Container
                className={`max-w-4xl prose prose-lg ${data.color === "primary" ? `prose-primary` : `dark:prose-dark`
                    }`}
                size="large"
            > */}
      <div className="min-h-banner max-h-banner relative flex justify-center items-center">
        <img className="absolute w-full h-full inset-0 object-cover" src={data.fullImage} />
      </div>
    </Section>
  );
};
