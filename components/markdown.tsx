import React from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const Markdown: React.FC<Options> = ({ children, ...rest }) => {
  console.log('file: markdown.tsx:8 ---- children:', children);
  console.log('file: markdown.tsx:8 ---- rest:', rest);
  return (
    <ReactMarkdown
      className="press"
      children={children}
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />
      }}
      {...rest}
    />
  );
};
