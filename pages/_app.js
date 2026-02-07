import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';

import "../styles/scss/nextjs-material-kit.scss";

import { Roboto, Roboto_Slab } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Diego Libreros Dev</title>
      </Head>
      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
          --font-roboto-slab: ${robotoSlab.style.fontFamily};
        }
        body {
          font-family: var(--font-roboto);
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-roboto-slab);
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};