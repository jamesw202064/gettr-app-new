import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Section } from '../components/section';
import { SEO } from '../components/seo';

export default function CareerPage() {
  const route = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [tryInit, setTryInit] = useState(false);

  useEffect(() => {
    // @ts-ignore
    if (window?.Grnhse) {
      // @ts-ignore
      window?.Grnhse?.Iframe?.load();
    } else if (loaded) {
      setTimeout(() => {
        setTryInit(!tryInit);
      }, 100);
    }
  }, [loaded, tryInit, route.asPath]);

  return (
    <>
      <SEO title="Career" />
      <Section className="flex-1">
        <div id="grnhse_app"></div>
      </Section>
      <Script src="https://boards.greenhouse.io/embed/job_board/js?for=gettr" onLoad={() => setLoaded(true)} />
    </>
  );
}
