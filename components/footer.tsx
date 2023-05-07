import React from 'react';
import Link from 'next/link';

import { Container } from './container';
import Apple from '../public/apple.svg';
import Android from '../public/android.svg';

export const Footer = () => {
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
