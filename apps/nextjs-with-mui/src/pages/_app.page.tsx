import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'styles/globals.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import theme from '@mact/mui-theme';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Head>
        <link
          rel="shortcut icon"
          href="/apps/nextjs-with-mui/public/favicon.png"
        />
        <title>Clipboard Health - MACT</title>
      </Head>
      <Box minHeight="100vh">
        <Component {...pageProps} />
      </Box>
    </QueryClientProvider>
  </ThemeProvider>
);

export default MyApp;
