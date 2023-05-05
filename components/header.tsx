import React from 'react';
import Link from 'next/link';

import { Container } from './container';
import { ThemeContext } from './theme';
import { useRouter } from 'next/router';
import GettrSvg from '../public/gettr.svg';

export const Header = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  const headerColor = {
    default: 'text-black dark:text-white to-white dark:from-gray-700 dark:to-gray-800',
    primary: {
      blue: 'text-white from-blue-300 to-blue-500',
      teal: 'text-white from-teal-400 to-teal-500',
      green: 'text-white from-green-400 to-green-500',
      red: 'text-white from-red-400 to-red-500',
      pink: 'text-white from-pink-400 to-pink-500',
      purple: 'text-white from-purple-400 to-purple-500',
      orange: 'text-white from-orange-400 to-orange-500',
      yellow: 'text-white from-yellow-400 to-yellow-500'
    }
  };

  const headerColorCss = data.color === 'primary' ? headerColor.primary[theme.color] : headerColor.default;

  const activeItemClasses = {
    blue: 'border-b-3 border-blue-200 dark:border-blue-700',
    teal: 'border-b-3 border-teal-200 dark:border-teal-700',
    green: 'border-b-3 border-green-200 dark:border-green-700',
    red: 'border-b-3 border-red-300 dark:border-red-700',
    pink: 'border-b-3 border-pink-200 dark:border-pink-700',
    purple: 'border-b-3 border-purple-200 dark:border-purple-700',
    orange: 'border-b-3 border-orange-200 dark:border-orange-700',
    yellow: 'border-b-3 border-yellow-300 dark:border-yellow-600'
  };

  const router = useRouter();
  return (
    <div className={`${headerColorCss} sticky top-0 bg-white z-10`} style={{ borderBottom: '1px solid #E8E9EF' }}>
      <Container className="relative z-10 px-4.5 md:px-6" size="none">
        <div className="flex items-center justify-between min-h-52 md:min-h-60">
          <h4 className="select-none text-lg font-bold tracking-tight transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex items-center">
                <GettrSvg
                  className="hidden md:block"
                  style={{
                    width: '101px',
                    height: '47px'
                  }}
                />
                <GettrSvg
                  className="md:hidden"
                  style={{
                    width: '101px',
                    height: '36px',
                    marginLeft: '-10px',
                    marginTop: '-10px'
                  }}
                />
              </a>
            </Link>
          </h4>
          <div className="md:hidden">
            <a
              href="https://gettr.com/"
              className="rounded-full text-xs px-4 py-1 border-1 text-brand border-brand"
              style={{
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'initial'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go To GETTR.com
            </a>
          </div>
          <ul className="hidden md:flex gap-6">
            {data.nav &&
              data.nav.map((item, i) => {
                const route = router.asPath || '/';
                const href = item.href || '/';
                const activeItem =
                  route.replace('/', '') == href?.replace('/', '') ||
                  (['/', '/home'].includes(href) && ['/', '/home'].includes(route));
                if (item.href.includes('http')) {
                  return (
                    <li
                      key={`${item.label}-${i}`}
                      className={activeItem ? activeItemClasses[theme.color] : 'flex items-center justify-center'}
                    >
                      <Link href={href}>
                        <a
                          target="_blank"
                          className="select-none inline-block tracking-wide font-bold text-brand border-1 border-brand rounded-3xl leading-5"
                          style={{
                            paddingTop: '7.5px',
                            paddingBottom: '7.5px',
                            paddingLeft: '15px',
                            paddingRight: '15px'
                          }}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={`${item.label}-${i}`} className={activeItem ? 'active' : ''}>
                    <Link href={`${href || '/'}`}>
                      <a className="header__btn">{item.label}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* <div
                    className={`absolute h-1 bg-gradient-to-r from-transparent ${data.color === "primary" ? `via-white` : `via-black dark:via-white`
                        } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
                ></div> */}
      </Container>
    </div>
  );
};
