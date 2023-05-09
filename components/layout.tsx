import React from 'react';
import Head from 'next/head';

import { Header } from './header';
import { Footer } from './footer';
import layoutData from '../content/global/index.json';
import { Theme } from './theme';
import Link from 'next/link';
import ArrowRight from '../public/arrow_right.svg';
import { useRouter } from 'next/router';
import { ThemeContext } from './theme';

export const useTheme = () => React.useContext(ThemeContext);

export const Layout = ({ rawData = '', data = layoutData, children }) => {
  const route = useRouter();
  const breadcrumbLink = route.asPath === '/' ? '/' : route.asPath.startsWith('/career') ? '/career' : '/press';
  const breadcrumbText = route.asPath === '/' ? 'About' : route.asPath.startsWith('/career') ? 'Career' : 'Press';
  console.log('data.theme.font', data.theme.font);
  return (
    <>
      <Head>
        <title>GETTR - The Marketplace of Ideas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {data.theme.font === 'nunito' && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === 'lato' && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${data.theme.font === 'nunito' && 'font-nunito'} ${
            data.theme.font === 'lato' && 'font-lato'
          } ${data.theme.font === 'sans' && 'font-sans'}`}
        >
          <Header data={data?.header} />
          <div className="md:hidden px-4.5 py-4">
            <nav>
              <ol className="flex items-center">
                <li className="font-medium text-xs leading-6">
                  <Link href="/" passHref>
                    <a>GETTR</a>
                  </Link>
                </li>
                {route.asPath !== '/imprint' && (
                  <>
                    <li className="mx-2 flex items-center">
                      <ArrowRight />
                    </li>
                    <li className="font-medium text-xs leading-6 text-text1">
                      <Link href={breadcrumbLink} passHref>
                        <a>{breadcrumbText}</a>
                      </Link>
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </Theme>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        icon {
          name
          color
          style
        }
        color
        nav {
          href
          label
        }
      }
      footer {
        color
        social {
          facebook
          twitter
          instagram
          github
        }
      }  
      theme {
        color
        icon
        font
        darkMode
      }
    }
  }
`;
