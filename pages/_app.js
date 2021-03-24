'use strict';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import Head from "next/head";
import "../styles/scss/nextjs-material-kit.scss";


export default function App({ Component, pageProps }) {
    return (
            <ThemeProvider theme={theme}>
                <Head>
                  <title>Diego Libreros Dev</title>
                </Head>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
    );
}