import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="fuck">
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Clipboard Health - MACT</title>
    </Head>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
