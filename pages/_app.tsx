import '../styles.css';
import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import { useTina } from 'tinacms/dist/react';
import { Layout } from '../components/layout';
import { TinaCMS } from 'tinacms';
// const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary';

const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT = process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const NEXT_PUBLIC_HIDE_EDIT_BUTTON = process.env.NEXT_PUBLIC_HIDE_EDIT_BUTTON || 0;

const App = ({ Component, pageProps }) => {
  return (
    <Layout rawData={pageProps} data={pageProps?.data?.global}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
