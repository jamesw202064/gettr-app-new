import '../styles.css';
import { Layout } from '../components/layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout rawData={pageProps} data={pageProps.data?.global?.data}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
