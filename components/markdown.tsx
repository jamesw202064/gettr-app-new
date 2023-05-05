import React from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Markdown: React.FC<Options> = ({ children, ...rest }) => {
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
