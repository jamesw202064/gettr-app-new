import React from 'react';
import { titleCase } from 'title-case';
import format from 'date-fns/format';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import removeMd from 'remove-markdown';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { SEO } from './seo';
import { Container } from './container';
import { ShareButton } from './shareButton';
import { Section } from './section';

const extractSEODescription = (md) => {
  try {
    return removeMd(md)
      ?.split('\n')
      ?.find((p) => p);
  } catch {
    return '';
  }
};

export const Press = ({ data, prev, next }) => {
  // const titleColorClasses = {
  //   blue: 'from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500',
  //   teal: 'from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500',
  //   green: 'from-green-400 to-green-600',
  //   red: 'from-red-400 to-red-600',
  //   pink: 'from-pink-300 to-pink-500',
  //   purple: 'from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500',
  //   orange: 'from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500',
  //   yellow: 'from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-500'
  // };
  /**
   * Formats date field value to be more readable.
   */
  let formattedDate;
  if (data?.date !== null) {
    const date = data.date ? new Date(data.date) : '';
    formattedDate = date ? format(date, 'MMMM d, yyyy') : date;
  }

  const seoTitle = data?.socialTitle || data?.title || '';
  const seoDescription = data?.socialDescription || extractSEODescription(data?.body) || '';
  const seoImageUrl = data?.socialImage || '';
  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} imageUrl={seoImageUrl} />
      <Section color={data.color} className="flex-1 p-6 sm:p-0 px-4 md:px-0">
        <Container className={`flex-1 max-w-3xl pb-2 px-0 pt-0 md:pt-12 pb-15 md:px-4`} size="medium">
          <p className="text-brand text-sm font-bold leading-5 mb-3">{formattedDate}</p>
          <p className={`font-extrabold text-3.5xl leading-none`}>{titleCase(data.title || '')}</p>
          {/* <div className="excerpt my-6">{data.excerpt}</div> */}
          {/* 
                <div className="flex items-center justify-center mb-16">
                    {data.author && (
                        <>
                            <div className="flex-shrink-0 mr-4">
                                <img
                                    className="h-14 w-14 object-cover rounded-full shadow-sm"
                                    src={data.author.data.avatar}
                                    alt={data.author.data.name}
                                />
                            </div>
                            <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
                                {data.author.data.name}
                            </p>
                            <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
                                —
                            </span>
                        </>
                    )}
                    <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
                        {formattedDate}
                    </p>
                </div> */}
        </Container>
        {/* feature image hidden */}
        {/* {data.heroImg && (
          <div className="mb-7 max-w-3xl lg:max-w-6xl flex justify-center mx-auto">
            <img
              src={data.heroImg}
              className="block h-auto max-w-full mx-auto object-cover rounded-md"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        )} */}
        <Container className={`flex-1 max-w-3xl pt-4 px-0 pb-0 md:pb-8 md:px-4 md:pt-0`} size="small">
          <div className="prose dark:prose-dark  w-full max-w-none">
            <TinaMarkdown content={data.body} />
          </div>
          <div className="p-14">
            <p className="text-center" style={{ fontSize: 13, lineHeight: '24px', fontWeight: 'bold' }}>
              GETTR
            </p>
            <p className="text-center" style={{ fontSize: 13, lineHeight: '24px', fontWeight: 'bold' }}>
              3 Columbus Circle
            </p>
            <p className="text-center" style={{ fontSize: 13, lineHeight: '24px', fontWeight: 'bold' }}>
              20th Floor
            </p>
            <p className="text-center" style={{ fontSize: 13, lineHeight: '24px', fontWeight: 'bold' }}>
              New York, NY 10019
            </p>
          </div>
        </Container>
        <ShareButton />
      </Section>
      <div className="text-black bg-bg1 flex items-center" style={{ minHeight: 197 }}>
        <div className="w-full">
          <Container className="flex justify-between px-0 md:px-6">
            <Link href={`/press/${prev?.node?._sys?.filename}`}>
              {prev ? (
                <a className="text-left flex items-center space-x-6">
                  <FiArrowLeft size={20} className="flex-none" />
                  <div>
                    <div className="text-brand text-sm font-bold">
                      {prev?.node?.date && format(new Date(prev?.node?.date), 'MMMM d, yyyy')}
                    </div>
                    <div className=" max-w-md text-base font-extrabold hover:underline">
                      {titleCase(prev?.node?.title || '')}
                    </div>
                  </div>
                </a>
              ) : (
                <a></a>
              )}
            </Link>
            <Link href={`/press/${next?.node?._sys?.filename}`}>
              {next ? (
                <a className="text-right flex items-center space-x-6">
                  <div>
                    <div className="text-brand text-sm font-bold">
                      {next?.node?.date && format(new Date(next?.node?.date), 'MMMM d, yyyy')}
                    </div>
                    <div className="max-w-md text-base font-extrabold hover:underline">
                      {titleCase(next?.node?.title || '')}
                    </div>
                  </div>
                  <FiArrowRight size={20} className="flex-none" />
                </a>
              ) : (
                <a></a>
              )}
            </Link>
          </Container>
        </div>
      </div>
    </div>
  );
};
