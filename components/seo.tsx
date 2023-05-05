import Head from 'next/head';

export function SEO({ description, title, imageUrl }: { title?: string; description?: string; imageUrl?: string }) {
  const siteTitle = `${title} | GETTR` || `GETTR`;
  const siteDescription =
    description ||
    'GETTR is a brand new social media platform founded on the principles of free speech, independent thought and rejecting political censorship and “cancel culture.” With best in class technology, our goal is to create a marketplace of ideas in order to share freedom and democracy around the world.';
  const siteUrl = typeof window !== 'undefined' ? location.href : '';
  const thumbnail = imageUrl || 'https://gettr.com/gettr.jpg';
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:site_name" content="GETTR" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={thumbnail} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:image" content={thumbnail} />
      <meta property="twitter:image:alt" content={siteTitle} />

      {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
    </Head>
  );
}
