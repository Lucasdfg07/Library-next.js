import Head from 'next/head';
import '../styles/globals.css'

import { Provider } from 'react-redux';

import store from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Livraria Em NextJS</title>
      </Head>

      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
