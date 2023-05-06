import React from 'react';
import Link from 'next/link';

import { Container } from './container';
import Apple from '../public/apple.svg';
import Android from '../public/android.svg';

export const Footer = (_: { data: any; icon: any; rawData: any }) => {
  // const theme = React.useContext(ThemeContext);
  // const socialIconClasses = 'h-7 w-auto';
  // const socialIconColorClasses = {
  //   blue: 'text-blue-500 dark:text-blue-400 hover:text-blue-300',
  //   teal: 'text-teal-500 dark:text-teal-400 hover:text-teal-300',
  //   green: 'text-green-500 dark:text-green-400 hover:text-green-300',
  //   red: 'text-red-500 dark:text-red-400 hover:text-red-300',
  //   pink: 'text-pink-500 dark:text-pink-400 hover:text-pink-300',
  //   purple: 'text-purple-500 dark:text-purple-400 hover:text-purple-300',
  //   orange: 'text-orange-500 dark:text-orange-400 hover:text-orange-300',
  //   yellow: 'text-yellow-500 dark:text-yellow-400 hover:text-yellow-300',
  //   primary: 'text-white opacity-80 hover:opacity-100'
  // };

  // const footerColor = {
  //   default: 'text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000',
  //   primary: {
  //     blue: 'text-white from-blue-500 to-blue-700',
  //     teal: 'text-white from-teal-500 to-teal-600',
  //     green: 'text-white from-green-500 to-green-600',
  //     red: 'text-white from-red-500 to-red-600',
  //     pink: 'text-white from-pink-500 to-pink-600',
  //     purple: 'text-white from-purple-500 to-purple-600',
  //     orange: 'text-white from-orange-500 to-orange-600',
  //     yellow: 'text-white from-yellow-500 to-yellow-600'
  //   }
  // };

  return (
    <footer>
      <Container className="flex flex-col justify-center" size="medium">
        <div
          className="text-center mb-5"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '18px',
            marginBottom: '20px'
          }}
        >
          Get the app
        </div>
        <div className="flex justify-center flex-wrap mb-6 md:mb-12">
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
        <div>
          <ul className="flex justify-center space-x-6 whitespace-nowrap">
            <li className="text-text1 hover:text-text1_hover text-13 font-medium leading-normal">
              <Link href="/" passHref>
                <a>About</a>
              </Link>
            </li>
            <li className="text-text1 hover:text-text1_hover text-13 font-medium leading-normal">
              <Link href="/press" passHref>
                <a>Press</a>
              </Link>
            </li>
            <li className="text-text1 hover:text-text1_hover text-13 font-medium leading-normal">
              <a href="https://gettr.com/terms" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
            </li>
            <li className="text-text1 hover:text-text1_hover text-13 font-medium leading-normal">
              <a href="https://gettr.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li className="text-text1 hover:text-text1_hover text-13 font-medium leading-normal">
              <Link href="/imprint" passHref>
                <a>Impressum</a>
              </Link>
            </li>
            <li className="hidden md:block text-text1 text-13 font-medium leading-normal">© 2023 GETTR, Inc.</li>
          </ul>
          <div className="md:hidden text-text1 text-center text-13 font-medium leading-normal mt-4">
            © 2023 GETTR, Inc.
          </div>
        </div>
      </Container>
    </footer>
  );
};
